import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private _http: HttpClient) { }


  public getAllEvent(id):Observable<[]> {
    return this._http.get<[]>("api/event/"+id);
  }

  public bookingEvent(body,file):Observable<[]> {
    const formData = new FormData();
    formData.append('userImagege', file);
    return this._http.post<[]>("api/booking",{formData,'name': body.name,'eamil': body.eamil,'phoneNo': body.phoneNo,'numberOfSeats': body.numberOfSeats,'namerOfAttendee': body.namerOfAttendee,'eventDate': body.eventDate});
  }  
}
