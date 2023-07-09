import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserapiService {
  api = `http://localhost:3000/api/user/`
  public isLogin = false
  public AdminOrNot = false;
  public photo = "" ;
  public Date =new Date().toDateString()
  constructor(private http: HttpClient) { }
  
  RegisterApi(Data:any):Observable<any>{
return this.http.post(`${this.api}register`, Data)
  }
  LoginApi(Data:any):Observable<any>{
  return  this.http.post(`https://localhost:44371/api/login`, Data)
      }
  LogOutApi():Observable<any>{
  return  this.http.post(`${this.api}logout`,{})
      }
  MyProfile():Observable<any>{
    return  this.http.get(`${this.api}myprofile`)
        }
  checkout(Data:any):Observable<any>{
    return  this.http.post("https://localhost:44371/Payment",Data) 
  }
  rate(Data:any):Observable<any>{
    return  this.http.post(`write api .... `,Data) 
  }
 

  
  signup(newUser: any){
    return this.http.post("https://localhost:44371/User", newUser);
  }
  editProfile(editedUser: any){
    return this.http.put("https://localhost:44371/User", editedUser);
  }
  getUser(){
    return this.http.get("https://localhost:44371/User/1");
  }
  review(newReview: any){
    return this.http.post("https://localhost:44371/Reviews", newReview);
  }
  getReviews(){
    return this.http.get("https://localhost:44371/Reviews");
  }
      
}
