import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService, private router:Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) : any {
    const token = this.accountService.getAuthorizationToken();
    let request: HttpRequest<any> = req;
    if (token && !this.accountService.isTokenExpired(token)) {
      request = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    } else {
      // this.accountService.logout();
    }

    return next.handle(request).pipe( tap(() => {},
      (err: any) => {
      if (err instanceof HttpErrorResponse && err.status == 401) {
        this.accountService.logout();
      } else {
        return throwError(err);
      }
    }));

  //   return next.handle(request).catch(err => {
  //     if (err.status === 401) {
  //          // Redirect here
  //     }
  // }

  //   return next.handle(request).do((event: HttpEvent<any>) => {
  //     if (event instanceof HttpResponse) {
  //     }
  //     }, (err: any) => {
  //     if (err instanceof HttpErrorResponse) {
  //       if (err.status === 401) {
  //           this.router.navigate(['login']);
  //       }
  //     }
  //   });

    //return next.handle(request).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //alert('Ocorreu um erro:' + error.error.message);
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      //alert(`${JSON.stringify(error.error)}`);
      console.error(
        `Código do erro ${error.status}, ` +
        `Erro: ${JSON.stringify(error.error)}`);
    }
    this.accountService.logout();
    return throwError('Ocorreu um erro, tente novamente');
  }
}
