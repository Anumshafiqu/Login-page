import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  imports: [ButtonModule , FormsModule , ReactiveFormsModule , InputTextModule, CheckboxModule , CardModule , InputTextModule ,
   CommonModule , ButtonModule , RouterModule , DropdownModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
// apiLoginObj :any = {
//   "EmailId": "",
//   "Password": ""
// }
 http = inject(HttpClient);
 router = inject(Router)
onLogin() {
  this.http.post("https://projectapi.gerasim.in/api/UserApp/login" , this.apiLoginObj).subscribe((res:any)=>{
    localStorage.setItem("angular19Token" , res.data.token);
    localStorage.setItem("angular19user", res.data.userId);
  
    this.router.navigateByUrl("dashboard")

  },error=>{
    alert("Wrong credentials");
  }
  
)

}









  showLogin: boolean = true; // show login first

  apiLoginObj = { EmailId: '', Password: '' };

  user = {
    firstName: '',
    lastName: '',
    country: null,
    businessClass: '',
    phoneNo: '',
    companyName: ''
  };

  countries = [
    { name: 'Pakistan', code: 'PK' },
    { name: 'United States', code: 'US' },
    { name: 'India', code: 'IN' }
  ];

  toggleForm() {
    this.showLogin = !this.showLogin;
  }

  // onLogin() {
  //   console.log('Login', this.apiLoginObj);
  // }

  onSubmit() {
    console.log('Sign Up', this.user);
  }
}
