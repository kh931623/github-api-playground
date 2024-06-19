import { Octokit } from "octokit";
import {
    zip,
    map,
    pipe,
    assoc,
} from 'ramda';

class GithubService {
    constructor(token) {
        this.token = token
        this.client = new Octokit({
            auth: token
        })
    }

    test() {
        console.log(this.token);
    }

    async isStarred(owner, repo) {
        try {
            await this.client.request('GET /user/starred/{owner}/{repo}', {
                owner,
                repo,
            })

            return true
        } catch (error) {
            return false
        }
    }

    async getRepos(keyword) {
        try {
            const { data } = await this.client.request('GET /search/repositories', {
                q: keyword,
                per_page: 10,
            })

            const repos = data.items.map(repo => {
                const {
                    full_name,
                    name,
                    id,
                    stargazers_count,
                    owner: {
                        login,
                        avatar_url
                    },
                } = repo

                return {
                    id,
                    name,
                    full_name,
                    avatar_url,
                    owner: login,
                    stargazers_count,
                }
            })

            const stars = await Promise.all(repos.map(repo => this.isStarred(repo.owner, repo.name)))

            const finalized = pipe(
                zip(repos),
                map(([repo, starred]) => assoc('starred', starred, repo))
            )(stars)

            console.log(finalized);

            return finalized
        } catch (error) {
            console.error(error);
            return []
        }
    }

    async starRepo(owner, repo) {
        return this.client.request('PUT /user/starred/{owner}/{repo}', {
            owner,
            repo,
        })
    }

    async unstarRepo(owner, repo) {
        return this.client.request('DELETE /user/starred/{owner}/{repo}', {
            owner,
            repo,
        })
    }
}

export default GithubService