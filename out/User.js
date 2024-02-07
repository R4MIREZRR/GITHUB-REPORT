"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(usrResponse) {
        this.login = usrResponse.login;
        this.fullName = usrResponse.name;
        this.repoCount = usrResponse.public_repos;
        this.followerCount = usrResponse.followers;
    }
}
exports.User = User;
