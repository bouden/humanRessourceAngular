import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class User
{
  constructor(
    public  name:String,
    public address: String,
    public contactNo:String,
    public userName:String,
    public password:String){}
  
}

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private httpclient : HttpClient) { }

   getUsers()
   {
     return this.httpclient.get<User[]>('http://localhost:8082/users');
   }

   getUserById(userName) {
    return this.httpclient.get<User>("http://localhost:8082/users" + "/"+ userName);
  }

   addUser( u :User)
   {
     return this.httpclient.post<User>('http://localhost:8082/users',u);
   }

}
