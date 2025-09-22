import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  // 👉 Save token
  // Saves a token in the browser’s localStorage under the key "token".
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
// Reads the token from localStorage.
// If no token exists → returns null.
  // 👉 Get token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Deletes the token (like logout).
  // 👉 Remove token
  clearToken() {
    localStorage.removeItem('token');
  }
}
