import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const Token = localStorage.getItem("angular19Token");
  const newreq = req.clone({
    setHeaders:{
      Authorization : `Bearer ${Token}`
    }
  })
  return next(newreq);
};
