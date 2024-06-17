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
  Input,
  Button
} from 'ui-lib';
import GithubService from 'github-service';

function App() {
  const [count, setCount] = useState(0)
  const [token, setToken] = useState('')
  const [keyword, setKeyword] = useState('')

  const showSearch = !!token

  const gs = new GithubService(token)

  const search = useCallback(debounce((keyword) => {
    console.log(keyword)
  }, 500), [])

  useEffect(() => {
    if (keyword) {
      search(keyword)
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
    </>
  )
}

export default App
