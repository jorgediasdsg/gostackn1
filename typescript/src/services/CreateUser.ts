/***
 * Para criar usuário informe: name, email, password
 */


interface TechObject {
    title: string;
    experience: number;
}

 interface CreateUserData {
    name?: string; //User ? para ser opcional
    email: string;
    password: string;
    techs:Array<string | TechObject>;
}

export default function createUser({name = '', email, password}: CreateUserData){
    const user = {
        name,
        email,
        password,
    }

};