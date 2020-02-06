import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpResponse} from '@angular/common/http';
import {HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from "rxjs";
import {Router} from "@angular/router";
import { empty, of } from "rxjs";
import { catchError } from 'rxjs/operators';


@Injectable()
export class PlayerInterceptor implements HttpInterceptor {
    [x: string]: any;
    

constructor (private router: Router) {}

intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

    return next.handle(req)

    .pipe(
    catchError(error => {
        if (error instanceof HttpErrorResponse && error.status == 404  ) {
            this.router.navigateByUrl('/not-found', {replaceUrl: true})

            return empty();
        }
        else
            return throwError(error);
    }));



}


}