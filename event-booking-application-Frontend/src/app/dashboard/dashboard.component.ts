import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  tableData: Array<any>;
  constructor(private dashboardService:DashboardService,private router:Router) {}

  ngOnInit() {
    this.dashboardService.getAllEvent().subscribe(data => {
      this.tableData = data['data'];
  }, error => {
    console.log(error);
  });
  }

  bookNow(id){
    console.log("=================",id)
    this.router.navigate(['/booking'],{queryParams: { id: id}});
  }

  editEvent(id){
    this.dashboardService.editOneEvent(id).subscribe(data => {
      this.tableData = data['data'];
  }, error => {
    console.log(error);
  });
  }

  deleteEvent(id){
    this.dashboardService.deleteOneEvent(id).subscribe(data => {
      this.tableData = data['data'];
  }, error => {
    console.log(error);
  });
  }

}
