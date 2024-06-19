import Star from '../Star';
import Button from '../Button';

const RepoList = ({
    repos,
    className,
    onStar,
    onUnstar,
    onShowCommits,
}) => {
    const handleButtonClick = (starred, index, owner, repo, starCount) => {
        if (starred) onUnstar(index, owner, repo, starCount)
        else onStar(index, owner, repo, starCount)
    }

    const listItems = repos.map((repo, index) => {
        const starCount = repo.stargazers_count > 1000
            ? (repo.stargazers_count / 1000).toFixed(1) + 'k'
            : repo.stargazers_count


        return (
            <li key={repo.id} className="block w-full text-left mb-3 border border-slate-300 rounded-lg p-3">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3">
                        <img className="inline-block" src={repo.avatar_url} alt="author avatar" width="48" height="48" />
                        <span className='ml-2'>
                            {repo.full_name}
                        </span>
                    </div>
                    <div>
                        <Button
                            onClick={() => handleButtonClick(repo.starred, index, repo.owner, repo.name, repo.stargazers_count)}
                        >
                            <Star
                                starred={repo.starred}
                            />
                            <span className='ml-2'>
                                {starCount}
                            </span>
                        </Button>

                        <Button className="mt-2" onClick={() => onShowCommits(repo.owner, repo.name)}>
                            Show Commits
                        </Button>
                    </div>
                </div>
            </li>
        )
    })

    return (
        <ul className={`list-image-none ${className}`}>
            {listItems}
        </ul>
    )
}

export default RepoList