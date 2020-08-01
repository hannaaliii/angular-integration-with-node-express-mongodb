import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http:HttpClient) { }

  newUser(item){
    console.log(item);
    return this.http.post("http://localhost:3000/reg",{"users":item})
    .subscribe(details=>{console.log(details)});
  }
}
