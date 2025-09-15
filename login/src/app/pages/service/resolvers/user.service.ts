import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements Resolve<any> {

  constructor(private http: HttpClient) { }
  resolve(): Observable<any> {
    // Fetch data before the route loads
    return this.http.get('https://jsonplaceholder.typicode.com/users/1');
  }
}
