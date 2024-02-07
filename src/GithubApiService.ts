// Esto importa el módulo request, que se utiliza para realizar solicitudes HTTP en Node.js.
// El * as request significa que importamos todo el módulo request y lo asignamos a la variable request.
import * as request from 'request';
import {User} from "./User";

//Esto define una clase llamada GithubApiService que exporta para que pueda ser utilizada en otros archivos.
// Esta clase contiene un método llamado getUserInfo para obtener información de un usuario de GitHub.
export class GithubApiService {

	getUserInfo(userName: string, cb: (user: User) => any){
		let options: any = {
			headers: {
				'User-Agent': 'request'
			},
			json: true
		}

		request.get('https://api.github.com/users/'+ userName, options, (error: any, response: any, body: any) => {

			let user = new User(body);
			cb(user);
		})
	}


}
