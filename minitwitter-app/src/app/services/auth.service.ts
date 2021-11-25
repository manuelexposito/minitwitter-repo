import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthSignUpDto } from '../models/dto/signup-dto';
import { AuthSignUpResponse } from '../models/interfaces/auth.interface';


const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

//TODO : SACAR LA LISTA DE TWEETS
//Dentro del método donde necesitemos el token par autorizar 
//haremos una cabecera como la de arriba, pero pondremos:
// 'Authentication Bearer : localStorage.getItem('token')

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


setToken(newToken : string){

  localStorage.setItem('token', newToken)

}

getToken(){

  return localStorage.getItem('token')
}


signUp(signUp : AuthSignUpDto) : Observable<AuthSignUpResponse>{

  let request = `${environment.apiUrlBase}/apiv1/auth/signup`

  return this.http.post<AuthSignUpResponse>(request, signUp, DEFAULT_HEADERS)

}


}
