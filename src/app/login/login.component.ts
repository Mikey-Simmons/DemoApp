import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: any;
  successMessage: any;
  username: string="";
  password:string="";
  constructor(){}
  ngOnInit(): void {
      
  }
  verify(){
    this.errorMessage = null;
    this.successMessage= null;
    if( this.username=="admin" && this.password =="admin123"){
      this.successMessage = "Login Success";
    }else{
      this.errorMessage = "Login Failed"
    }
    console.log("User: "+ this.username);
    console.log("Pass: "+ this.password);
  }
}
