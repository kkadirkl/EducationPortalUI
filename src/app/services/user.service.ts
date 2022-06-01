import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { UserModel } from '../models/userModels/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl:string = `https://localhost:44386/api/Users`;

  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<ListResponseModel<UserModel>>(this.apiUrl + `/get-all`);
  }
}
