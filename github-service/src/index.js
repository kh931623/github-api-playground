import { Octokit } from "octokit";

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

    async getRepos(keyword) {
        try {
            const { data } = await this.client.request('GET /search/repositories', {
                q: keyword,
                per_page: 10,
            })

            console.log(data);

            return data.items.map(repo => {
                const {
                    full_name: name,
                    id,
                    stargazers_count,
                    owner: {
                        avatar_url
                    },
                } = repo

                return {
                    id,
                    name,
                    avatar_url,
                    stargazers_count,
                }
            })
        } catch (error) {
            console.error(error);
            return []
        }
    }
}

export default GithubService