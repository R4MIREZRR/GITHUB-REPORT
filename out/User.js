"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(repo) {
        this.login = repo.login;
        this.fullName = repo.name;
        this.repoCount = repo.public_repos;
        this.followerCount = repo.followers;
    }
}
exports.User = User;
