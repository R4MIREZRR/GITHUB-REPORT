// Esto importa el módulo request, que se utiliza para realizar solicitudes HTTP en Node.js.
// El * as request significa que importamos todo el módulo request y lo asignamos a la variable request.
import * as request from 'request';
import {User} from "./User";
import {Repo} from "./Repo";

const OPTIONS: any = {
	headers: {
		'User-Agent': 'request'
	},
	json: true
}
export class GithubApiService {

	getUserInfo(userName: string, cb: (user: User) => any){
		request.get('https://api.github.com/users/'+ userName, OPTIONS, (error: any, response: any, body: any) => {

			let user = new User(body);
			cb(user);
		})
	}


	getRepoInfo(userName: string, cb: (repo: Repo[]) => any){
		request.get('https://api.github.com/users/'+ userName + '/repos', OPTIONS, (error: any, response: any, body: any) => {
			let repos = body.map((repo: any) => new Repo(repo))
			cb(repos);
		})
	}


}
