import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bandungregencytour';
  paketwisatas: any = [];
  pw: any = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get("assets/paketwisata.json").subscribe(data =>{
        console.log(data);
        this.paketwisatas = data;
          })
        
    this.httpClient.get("https://dummyjson.com/products/1").subscribe(data =>{
         console.log(data);
         this.pw = data;
              })

    
  }

  


}