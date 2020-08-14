import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { BookingService } from './booking.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: [
    './booking.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class BookingComponent implements OnInit {
  tableData: Array<any>;
  userprofilepath:File;
  seatesVal = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23']
  eventName:'';
  public model = {
    name: '',
    email: '',
    phoneNo: '',
    numberOfSeats: '',
    namerOfAttendee: '',
    auserImagege: '',
    eventDate: '',
    totalNoOfSeats: ''
  }

  constructor(private bookingService:BookingService,private toastr: ToastrService,private router:Router,private activatedRoute:ActivatedRoute) {}

  ngOnInit() {
    let newDate = new Date();
    this.model.eventDate = newDate.getMonth()+'-'+newDate.getDate()+'-'+newDate.getFullYear();
    
    this.activatedRoute.queryParams.subscribe(params => {
      this.bookingService.getAllEvent(params.id).subscribe(data => {
        this.eventName = data['data'].name;
        this.model.totalNoOfSeats = data['data'].totalNoOfSeats;
    }, error => {
      console.log(error);
    });
    })  
  }

  bookingSubmit(){
    this.bookingService.bookingEvent(this.model,this.userprofilepath).subscribe(data => {
     if(data['message'] === 'success'){
      this.toastr.success("Booking done successfully");
      this.router.navigate(['/dashboard']);
     }
  }, error => {
    this.toastr.error("There is a problem with booking");
    console.log(error);
  });
  }

  gotoEvents(){
    this.router.navigate(['/dashboard']);
  }

  fileSelected1(event) {
    this.userprofilepath = event.target.files[0];
    }

}
