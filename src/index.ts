import {GithubApiService} from './GithubApiService';
import {User} from "./User";
import {Repo} from "./Repo";
import * as _ from 'lodash';

let svc = new GithubApiService();

if(process.argv.length < 3){
    console.log('Please pass the username as an argument');
}
else {
    let username = process.argv[2];

    svc.getUserInfo(username, (user: User) => {
        svc.getRepoInfo(username, (repos: Repo[]) => {
            let sorterRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * -1]);
            let filterRepos = _.take(sorterRepos, 5);
            user.repos = filterRepos;
            console.log(user);


        })
    });
}


