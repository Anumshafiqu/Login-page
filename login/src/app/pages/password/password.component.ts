import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-password',
  imports: [FormsModule , CardModule , ButtonModule , ReactiveFormsModule , ButtonModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {

  email: string = '';

  submitForgotPassword() {
    alert('Password reset link sent to your email.');
  }
router = inject(Router)
  cancel() {
this.router.navigateByUrl("/login")
  }
}
