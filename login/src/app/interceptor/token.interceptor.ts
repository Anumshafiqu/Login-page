import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, finalize, throwError } from 'rxjs';
import { LoaderService } from '../pages/service/loader.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const Token = localStorage.getItem("angular19Token");
  // clone is  use to create new request
  debugger;
  const newreq = req.clone({
  
    // add to update herders
    setHeaders:{
      // standard way to add a JWT token
      Authorization : `Bearer ${Token}`
    
    }
  })

   return next(newreq);








  // return next(req).pipe(
  //   catchError((error) => {
  //     window.alert('Login failed: Invalid credentials');

  //     return throwError(() => error);
  //   })
  // );

};
