import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicLoginService {

  constructor(private _http: HttpClient) { }

  public userLogin(body):Observable<[]> {
    return this._http.post<[]>("api/userLoginRoute",body);
  }

  
}
