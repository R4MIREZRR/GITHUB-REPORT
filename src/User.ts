import {Repo} from "./Repo";

export class User {
	login: string;
	fullName: string;
	repoCount: string;
	followerCount: number;
	repos!: Repo[];

	constructor(usrResponse: any) {
		this.login = usrResponse.login;
		this.fullName = usrResponse.name;
		this.repoCount = usrResponse.public_repos;
		this.followerCount = usrResponse.followers;
	}
}
