import { ApiService } from './../../core/services/api.services';
import { responseModel } from './../../core/models/response.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  responseModel?: responseModel;
  constructor(private apiService: ApiService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getData();
    
  }
  getData(){
    this.apiService.getData().subscribe((response) => {
      this.responseModel = response;
      console.log(this.responseModel)
    })
  }
}
