import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicLoginService } from './basic-login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {
public model = {
  email:'',
  password:''
}
  constructor(private router:Router,private toastrService: ToastrService,private basicLoginService:BasicLoginService) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  login(){
    this.basicLoginService.userLogin(this.model).subscribe(data => {
      this.toastrService.success("Booking done successfully.");
      if(data['message'] === 'success'){
        this.toastrService.success("Booking done successfully.");
        this.router.navigate(['/dashboard']);
      }
   }, error => {
     console.log(error);
   });
    
  }

}
