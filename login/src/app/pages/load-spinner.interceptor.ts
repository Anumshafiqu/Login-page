import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError, finalize } from 'rxjs';
import { LoaderService } from './service/loader.service';

export const loadSpinnerInterceptor: HttpInterceptorFn = (req, next) => {
  // const loaderService = inject(LoaderService);
  // loaderService.show();

  // return next(req).pipe(
  //   finalize(() => loaderService.hide())
  // );

return next(req)


};
