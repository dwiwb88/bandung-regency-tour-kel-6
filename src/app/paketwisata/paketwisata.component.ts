import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-paketwisata',
  templateUrl: './paketwisata.component.html',
  styleUrls: ['./paketwisata.component.css']
})

export class PaketwisataComponent  {
  title = 'bandungregencytour';
  paketwisata: any = [];

  constructor(private httpClient: HttpClient) { 
    this.httpClient.get("http://localhost/bismillah_bisa/Paketwisatas").subscribe((data) => {
      console.log(data)
      this.paketwisata = data;

  })

  

  
  }

}
