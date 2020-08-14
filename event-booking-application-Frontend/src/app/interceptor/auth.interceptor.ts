import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { SERVER_API_URL } from '../constants';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request || !request.url || (/^http/.test(request.url) && !(SERVER_API_URL && request.url.startsWith(SERVER_API_URL)))) {
            return next.handle(request);
        }

        const token = sessionStorage.getItem('id_token') || sessionStorage.getItem('id_token');
        console.log("=========token===============>",token)
        if (!!token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer '+token
                }
            });
        }else{
           // this.router.navigate(["/"]);
        }
        return next.handle(request);
    }
}
