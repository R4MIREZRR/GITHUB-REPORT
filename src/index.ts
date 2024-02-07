import {GithubApiService} from './GithubApiService';
import {User} from "./User";
import {Repo} from "./Repo";


let svc = new GithubApiService();
svc.getUserInfo('koushikkothagal', (user: User) => {
    svc.getRepoInfo('koushikkothagal', (repos: Repo[]) => {
        user.repos = repos;
        console.log(user);


    })
});

