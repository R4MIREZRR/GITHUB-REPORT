"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GithubApiService_1 = require("./GithubApiService");
let svc = new GithubApiService_1.GithubApiService();
svc.getUserInfo('koushikkothagal', (user) => {
    svc.getRepoInfo('koushikkothagal', (repos) => {
        user.repos = repos;
        console.log(user);
    });
});
