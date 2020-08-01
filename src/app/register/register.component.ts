import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { RegisterModel } from '../register/register.model';
import { FormBuilder, Validator, Validators } from '@angular/forms'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title:String = "Sign Up"
  
  constructor(private registerService:RegisterService, private router: Router, private rg:FormBuilder) { }
  registeredUser = new RegisterModel(null,null,null,null,null);
  NewReg(){
    
    this.registerService.newUser(this.registeredUser);
    alert("Success");
    this.router.navigate(['/login'])
  }
  ngOnInit(): void {
  }
  

}
