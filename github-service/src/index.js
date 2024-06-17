import { Octokit } from "octokit";

class GithubService {
    constructor(token) {
        this.client = new Octokit({
            auth: token
        })
    }

    test() {
        console.log('hello');
    }
}

export default GithubService