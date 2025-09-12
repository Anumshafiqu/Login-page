import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  imports: [ButtonModule , FormsModule , ReactiveFormsModule , InputTextModule, CheckboxModule , CardModule , InputTextModule ,
   CommonModule , ButtonModule , RouterModule , DropdownModule , ToastModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone : true , 
  providers: [MessageService],
})
export class LoginComponent {


  http = inject(HttpClient);
  router = inject(Router);
 messageService = inject(MessageService);
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
            this.messageService.add({
        severity: 'error',
        summary: 'Login Failed',
        detail: 'Please fill in all required fields.',
        life: 3000
      });
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
        console.log("Signup data" , apiLoginObj)
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Invalid Credentials',
          detail: 'Wrong email or password',
          life: 3000
        });
      });
  }


showLogin:boolean = true;




   toggleForm() {
    this.showLogin = !this.showLogin;
  }
  onSubmit() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
            this.messageService.add({
        severity: 'warn',
        summary: 'Sign Up Failed',
        detail: 'Please fill all required fields',
        life: 3000
      });
      return;
    }
localStorage.setItem("angular19user", "dummy-user");
    const signupData = this.signupForm.value;
    console.log('Sign Up Data:', signupData);
        this.messageService.add({
      severity: 'success',
      summary: 'Sign Up Successful',
      detail: 'Redirecting to dashboard...',
      life: 3000
    });

    this.router.navigateByUrl("/dashboard");
  }
    countries = [
    { name: 'Pakistan', code: 'PK' },
    { name: 'USA', code: 'US' },
    { name: 'UK', code: 'UK' },
    // Add more countries here
  ];
}
