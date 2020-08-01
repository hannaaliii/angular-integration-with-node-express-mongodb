import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { FormBuilder, Validator, Validators } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title: String = "Login";
  
  constructor(private registerService:RegisterService, private router: Router, private fb:FormBuilder) { }
  
  ngOnInit(): void {
  }
  
  login(){
    alert("Welcome");
    this.router.navigate(['/']);
  }
}
