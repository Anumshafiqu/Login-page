import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  imports: [ButtonModule , FormsModule , ReactiveFormsModule , InputTextModule, CheckboxModule , CardModule , InputTextModule ,
   CommonModule , ButtonModule , RouterModule , DropdownModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone : true , 
})
export class LoginComponent {

//  http = inject(HttpClient);
//  router = inject(Router)
// onLogin() {
//   this.http.post("https://projectapi.gerasim.in/api/UserApp/login" , this.apiLoginObj).subscribe((res:any)=>{
//     localStorage.setItem("angular19Token" , res.data.token);
//     localStorage.setItem("angular19user", res.data.userId);
  
//     this.router.navigateByUrl("dashboard")

//   },error=>{
//     alert("Wrong credentials");
//   }
  
// )

// }


//   LoginForm = new FormGroup({
    
//     email: new FormControl('', [Validators.required, Validators.email]),
//     Password: new FormControl('', [Validators.required , Validators.minLength(8)]),
//   });



  http = inject(HttpClient);
  router = inject(Router);

  LoginForm!: FormGroup;
  signupForm!: FormGroup;

  ngOnInit(): void {
    // Initialize Reactive Login Form
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]), // required + email format
      password: new FormControl('', [Validators.required, Validators.minLength(6)]) // required + min length
    });
    // for sign up
        this.signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      businessClass: new FormControl('', [Validators.required]),
      phoneNo: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]),
      companyName: new FormControl('', [Validators.required])
    });
  }

  onLogin() {
    if (this.LoginForm.invalid) {
      this.LoginForm.markAllAsTouched(); // show validation errors
      return;
    }

    const apiLoginObj = {
      EmailId: this.LoginForm.value.email,
      Password: this.LoginForm.value.password
    };

    this.http.post("https://projectapi.gerasim.in/api/UserApp/login", apiLoginObj)
      .subscribe((res: any) => {
        localStorage.setItem("angular19Token", res.data.token);
        localStorage.setItem("angular19user", res.data.userId);
        this.router.navigateByUrl("dashboard");
      }, error => {
        alert("Wrong credentials");
      });
  }


showLogin:boolean = true;




   toggleForm() {
    this.showLogin = !this.showLogin;
  }
  onSubmit() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    const signupData = this.signupForm.value;
    console.log('Sign Up Data:', signupData);

    this.router.navigateByUrl("dashboard");
  }
    countries = [
    { name: 'Pakistan', code: 'PK' },
    { name: 'USA', code: 'US' },
    { name: 'UK', code: 'UK' },
    // Add more countries here
  ];
}
