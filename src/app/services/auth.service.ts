import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AuthenticatedModel } from '../models/authenticationModels/AuthenticatedModel';
import { UserForLoginModel } from '../models/authenticationModels/userForLoginModel';
import { UserForRegisterModel } from '../models/authenticationModels/userForRegisterModel';
import { DataResponseModel } from '../models/responseModels/dataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private currentUserSubject:BehaviorSubject<AuthenticatedModel>;
  public currentUser: Observable<AuthenticatedModel>;

  private readonly apiUrl:string = `https://localhost:44386/api/Authentication`;

  constructor(private httpClient:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<AuthenticatedModel>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  register(userForRegisterModel:UserForRegisterModel){
    const registerUrl = this.apiUrl + `/register`;
    return this.httpClient.post<DataResponseModel<AuthenticatedModel>>(registerUrl,userForRegisterModel);
  }

  login(userForLoginModel:UserForLoginModel){
    const loginUrl = this.apiUrl + `/login`;
    return this.httpClient.post<DataResponseModel<AuthenticatedModel>>(loginUrl,userForLoginModel).pipe(map(user => {     
      localStorage.setItem('currentUser',JSON.stringify(user.data));
      localStorage.setItem('token',JSON.stringify(user.data.token));
      this.currentUserSubject.next(user.data);
      return user;
    }));
  }

  public get currentUserValue(){
    return this.currentUserSubject.value;
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
}
}
