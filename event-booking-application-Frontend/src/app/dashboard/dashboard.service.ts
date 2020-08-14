import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http: HttpClient) { }


  public getAllEvent():Observable<[]> {
    return this._http.get<[]>("api/event");
  }

  public editOneEvent(id):Observable<[]> {
    return this._http.get<[]>("api/event/"+id);
  }

  public deleteOneEvent(id):Observable<[]> {
    return this._http.delete<[]>("api/event/"+id);
  }
  
}
