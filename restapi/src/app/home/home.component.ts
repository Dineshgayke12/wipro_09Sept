import { Component } from '@angular/core';
import { ApiConsumeService } from '../api-consume.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  convmultiple : any;
  constructor(private apiService : ApiConsumeService){}

  ngOnInit():void{
    this.apiService.consumeapi().subscribe((data) =>{
      //this.convmultiple=data[convmultiple];
    })
  }
}
