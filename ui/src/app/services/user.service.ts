import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  myApi = 'http://localhost:3000/api/user/';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.myApi + "get-all-users");
  }
  
  
  userSignup(user:UserModel): Observable<any> {
    return this.http.post<any>(this.myApi + 'user-register', user)
  }

  // updatePass(data: UserModel): Observable<any> {
  //   return this.http.post<any>(this.myApi + 'update-password/', data)
  // }

  userLogin(details:UserModel): Observable<any>{
    return this.http.post<any>(this.myApi + 'user-login' , details)
  }

  authUser() {
    return !!localStorage.getItem('UserToken');
  }
}
