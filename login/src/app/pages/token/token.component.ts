import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { LoaderService } from '../service/loader.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-token',
  imports: [NgIf],
  templateUrl: './token.component.html',
  styleUrl: './token.component.css'
})
export class TokenComponent {
  private auth = inject(LoaderService);
  private http = inject(HttpClient);
  // Make a variable token to store and show token on screen.

  token: string | null = null;

  saveToken() {
    // 👉 Add a sample JWT token (just a string for demo)
    const sampleToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
      'eyJ1c2VySWQiOjEsIm5hbWUiOiJBbnVtIn0.' +
      'abc123signature';

    this.auth.setToken(sampleToken);
    // Token is stored in this.token so UI shows it.
    this.token = sampleToken;
    alert('✅ JWT Token Saved!');
  }

  getData() {
    // 👉 Interceptor will automatically attach token
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe({
      next: (res) => console.log('API Response:', res),
      error: (err) => console.error('Error:', err)
    });
  }
}
