const RepoList = ({
    repos,
}) => {
    const listItems = repos.map((repo) =>
        <li key={repo.id} className="block w-full text-left mb-3 border border-slate-300 rounded-lg p-3">
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3">
                    <img className="inline-block" src={repo.avatar_url} alt="author avatar" width="48" height="48" />
                    <span>
                        {repo.name}
                    </span>
                </div>
                <div>
                    {repo.stargazers_count}
                </div>
            </div>
        </li>
    )

    return (
        <ul className="list-image-none">
            {listItems}
        </ul>
    )
}

export default RepoList