import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-signup',
  imports: [FormsModule , DropdownModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user = {
    firstName: '',
    lastName: '',
    country: '',
    businessClass: '',
    phoneNo: '',
    companyName: ''
  };

  countries = [
    { name: 'USA', code: 'US' },
    { name: 'UK', code: 'UK' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'India', code: 'IN' }
  ];

  onSubmit() {
    console.log('User Data:', this.user);
    alert('Signup Successful!');
  }
}
