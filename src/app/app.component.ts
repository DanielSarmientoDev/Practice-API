import { responseModel } from './core/models/response.model';
import { ApiService } from './core/services/api.services';

import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticeApi';
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
