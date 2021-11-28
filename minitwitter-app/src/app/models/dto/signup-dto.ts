import { environment } from "src/environments/environment";


export class AuthSignUpDto {
    username:string;
    email:string;
    password:string;
    code:string;

    constructor() {
        this.username='';
        this.email = '';
        this.password = '';
        this.code=`${environment.apiCode}`;
    }
}

