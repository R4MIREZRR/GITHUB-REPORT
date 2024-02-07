"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubApiService = void 0;
// Esto importa el módulo request, que se utiliza para realizar solicitudes HTTP en Node.js.
// El * as request significa que importamos todo el módulo request y lo asignamos a la variable request.
const request = __importStar(require("request"));
//Esto define una clase llamada GithubApiService que exporta para que pueda ser utilizada en otros archivos.
// Esta clase contiene un método llamado getUserInfo para obtener información de un usuario de GitHub.
class GithubApiService {
    // Este es el método getUserInfo que toma un parámetro userName de tipo string,
    // que representa el nombre de usuario de GitHub del usuario cuya información queremos obtener.
    getUserInfo(userName) {
        //Aquí se define un objeto options que se utiliza para configurar las opciones de la solicitud HTTP.
        // En este caso, solo se especifica el encabezado User-Agent como 'request', que es el nombre del agente
        // de usuario que se enviará en la solicitud HTTP. Esto es requerido por la API de GitHub para identificar
        // la solicitud.
        let options = {
            headers: {
                //aunque no necesariamente tienes que usar 'request' como valor para User-Agent,
                // es importante que proporciones un valor significativo y distintivo para que la
                // API de GitHub pueda identificar adecuadamente tu solicitud.
                'User-Agent': '21344'
            }
        };
        /* request.get(...): => Esto es una llamada a una función llamada get del módulo request.
        Esta función se utiliza para hacer una solicitud HTTP GET a una URL específica.
        La URL que se pasa como primer argumento es la dirección a la que queremos hacer la solicitud.*/
        /*'https://api.github.com/users/' + userName: => Esta parte de la URL es la dirección de la API de GitHub a
        la que estamos haciendo la solicitud. Estamos añadiendo el nombre de usuario (userName) al final de la URL
        para obtener información específica sobre ese usuario.*/
        /*options: Este es un objeto que contiene opciones adicionales para nuestra solicitud HTTP.
        En este caso, solo estamos especificando un encabezado llamado User-Agent, que ayuda a identificar
        nuestra solicitud.*/
        /*options: => Este es un objeto que contiene opciones adicionales para nuestra solicitud HTTP.
        En este caso, solo estamos especificando un encabezado llamado User-Agent, que ayuda a
         identificar nuestra solicitud.*/
        /*error:  => Este parámetro contendrá cualquier error que pueda ocurrir durante la solicitud HTTP.
        Si no hay ningún error, este será null.*/
        /*response: => Este parámetro contendrá toda la información sobre la respuesta HTTP que recibimos del servidor.
        Esto incluye cosas como el código de estado (por ejemplo, 200 si la solicitud fue exitosa),
         encabezados de respuesta, etc.*/
        /*body: => Este parámetro contiene el cuerpo de la respuesta HTTP.
        En el contexto de una solicitud a la API de GitHub, este sería el cuerpo de la respuesta JSON
        que contiene la información del usuario solicitada.*/
        // Entonces, en resumen, esta parte del código realiza una solicitud HTTP GET a la API de GitHub para obtener
        // información sobre un usuario específico. Cuando la solicitud se completa, la función de devolución de
        // llamada se ejecuta y podemos manejar cualquier error que ocurra, así como acceder a la respuesta HTTP
        // y al cuerpo de la respuesta para obtener la información que necesitamos.
        request.get('https://api.github.com/users/' + userName, options, (error, response, body) => {
            //En la función de devolución de llamada, simplemente se imprime el cuerpo de la respuesta
            // (es decir, la información del usuario de GitHub) en la consola.
            console.log(body);
        });
    }
}
exports.GithubApiService = GithubApiService;
