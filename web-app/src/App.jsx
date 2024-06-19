import {
  useState,
  useEffect,
  useCallback,
} from 'react'
import './App.css'
import {
  debounce,
} from 'lodash';
import {
  assocPath,
} from 'ramda';

import {
  Input,
  RepoList,
} from 'ui-lib';
import GithubService from 'github-service';

function App() {
  const [count, setCount] = useState(0)
  const [token, setToken] = useState('')
  const [keyword, setKeyword] = useState('')
  const [repos, setRepos] = useState([])

  const showSearch = !!token
  const showRepos = !!repos.length

  const gs = new GithubService(token)

  const search = useCallback(debounce((keyword, gs) => {
    gs.getRepos(keyword).then(setRepos)
  }, 500), [])

  const handleStar = async (index, owner, repo) => {
    try {
      await gs.starRepo(owner, repo)

      setRepos(repos => {
        return assocPath([
          index,
          'starred'
        ], true, repos)
      })
    } catch (error) {
      alert(`Failed to star ${owner}/${repo}`)
    }
  }

  const handleUnstar = async (index, owner, repo) => {
    try {
      await gs.starRepo(owner, repo)

      setRepos(repos => {
        return assocPath([
          index,
          'starred'
        ], false, repos)
      })
    } catch (error) {
      alert(`Failed to unstar ${owner}/${repo}`)
    }
  }

  const handleShowCommits = async (owner, repo) => {
    try {
      const commits = await gs.getCommis(owner, repo)
      alert(`Last 5 commits for ${owner}/${repo} \n ${commits.join('\n')}`)
    } catch (error) {
      alert(`Failed to show commits for ${owner}/${repo}`)
    }
  }

  useEffect(() => {
    if (keyword) {
      search(keyword, gs)
    }
  }, [keyword])

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <button onClick={() => gs.test()}>Hello</button>
        </p>
        <p className='border border-black'>
          {token}
        </p>
        <p className='border border-black'>
          {keyword}
        </p>
      </div>

      <Input
        label='JWT'
        value={token}
        onChange={setToken}
      />

      {showSearch &&
        <Input
          className="mt-3"
          label='Search Text'
          value={keyword}
          onChange={setKeyword}
        />
      }

      {showRepos &&
        <RepoList
          onStar={handleStar}
          onUnstar={handleUnstar}
          onShowCommits={handleShowCommits}
          className="mt-3"
          repos={repos}
        />
      }
    </>
  )
}

export default App
