import {Repo} from "./Repo";

export class User {
	login: string;
	fullName: string;
	repoCount: number;
	followerCount: number;
	repos?: Repo[];

	constructor(repo: any) {
		this.login = repo.login;
		this.fullName = repo.name;
		this.repoCount = repo.public_repos;
		this.followerCount = repo.followers;
	}
}
