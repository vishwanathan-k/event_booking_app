import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import {SharedModule} from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BookingRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [BookingComponent]
})
export class BookingModule { }
