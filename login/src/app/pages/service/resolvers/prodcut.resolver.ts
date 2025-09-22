
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, of } from 'rxjs';

export const prodcutResolver: ResolveFn<any> = (route, state) => {
  const http = inject(HttpClient);

  return http.get('https://jsonplaceholder.typicode.com/users/1').pipe(
    catchError((err: any) => {
      console.error("API error:", err);
      return of(null); // fallback value if API fails
    })
  );
};
