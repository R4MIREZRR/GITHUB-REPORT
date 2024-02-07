import {GithubApiService} from './GithubApiService';
import {User} from "./User";
import {Repo} from "./Repo";


let svc = new GithubApiService();
svc.getUserInfo('koushikkothagal', (user: User) => {
    console.log(user);
});


svc.getRepoInfo('koushikkothagal', (repos: Repo[]) => {
    console.log(repos);
})

