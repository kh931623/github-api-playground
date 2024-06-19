const RepoList = ({
    repos,
}) => {
    const listItems = repos.map((repo) => {
        const starCount = repo.stargazers_count > 1000
            ? (repo.stargazers_count / 1000).toFixed(1) + 'k'
            : repo.stargazers_count

        return (
            <li key={repo.id} className="block w-full text-left mb-3 border border-slate-300 rounded-lg p-3">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3">
                        <img className="inline-block" src={repo.avatar_url} alt="author avatar" width="48" height="48" />
                        <span>
                            {repo.name}
                        </span>
                    </div>
                    <div>
                        {starCount}
                    </div>
                </div>
            </li>
        )
    })

    return (
        <ul className="list-image-none">
            {listItems}
        </ul>
    )
}

export default RepoList