import {GithubApiService} from './GithubApiService';
import {User} from "./User";
import {Repo} from "./Repo";
import * as _ from 'lodash';

let svc = new GithubApiService();
svc.getUserInfo('koushikkothagal', (user: User) => {
    svc.getRepoInfo('koushikkothagal', (repos: Repo[]) => {
        let sorterRepos = _.sortBy(repos, [(repo: Repo)=> repo.forkCount * -1]);
        let filterRepos = _.take(sorterRepos, 5);
        user.repos = filterRepos;
        console.log(user);


    })
});

