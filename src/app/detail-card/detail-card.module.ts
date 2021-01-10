import { DetailCardComponent } from './components/detail-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCardRoutingModule } from './detail-card-routing.module';


@NgModule({
  declarations: [DetailCardComponent],
  imports: [
    CommonModule,
    DetailCardRoutingModule
  ]
})
export class DetailCardModule { }
