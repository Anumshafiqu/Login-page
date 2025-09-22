import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements Resolve<any> {

  constructor(private http: HttpClient , private router: Router) { }
  resolve(): Observable<any> {
    // Fetch data before the route loads
    return this.http.get('https://jsonplaceholder.typicode.com/users/1');
  }


}
