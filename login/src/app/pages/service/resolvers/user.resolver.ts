import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, finalize, Observable, of } from 'rxjs';
import { LoaderService } from '../loader.service';

export const userResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>  {
const http = inject(HttpClient);
const router = inject(Router);

const userId = route.paramMap.get('id');

return http.get(`https://jsonplaceholder.typicode.com/users/${userId}`).pipe(
  catchError(err => {
    alert('API is not working');
    console.log("API is not working plz check")
    router.navigate(['/login']); // redirect if API fails
    return of(null); // prevent app crash
  })
);
};
