import {Repo} from "./Repo";

export class User {
	login: string;
	fullName: string;
	repoCount: string;
	followerCount: number;
	repos: Repo[];
}
