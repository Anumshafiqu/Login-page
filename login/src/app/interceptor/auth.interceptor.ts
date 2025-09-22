import { HttpErrorResponse, HttpHandler, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

import { Observable, catchError, throwError } from 'rxjs';
import { LoaderService } from '../pages/service/loader.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next: HttpHandlerFn) => {
  const authService = inject(LoaderService);

  // Ask service: “Do we have a token saved?”
  const token = authService.getToken();

  // 👉 If token exists, add Authorization header
  let newReq = req;
  if (token) {
    newReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
// Send the request forward (to the server)
  return next(newReq);

};
