import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { paketwisataModel } from './paketwisata.model';
import { PaketwisataService } from './paketwisata.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-paketwisata',
  templateUrl: './paketwisata.component.html',
  styleUrls: ['./paketwisata.component.css']
})

// export class PaketwisataComponent implements OnInit {
//   title  = 'bandungregencytour';
//   paketwisata: paketwisataModel=[];

//   constructor(
//     private _paketwisata : PaketwisataService
//     ) {} 
    
//     ngOnInit(): void {
//       this.getpaketwisata()
//     }
//     getpaketwisata() {
//       this._paketwisata.listpaketwisata().subscribe(response => {
//       this.paketwisata = response ["paketwisata"]
//       console.log(this.paketwisata)
//     })
//     }


  export class PaketwisataComponent implements OnInit {
    paketWisata: any[];
  
    constructor(private http: HttpClient) { }
  
    ngOnInit() {
      this.getPaketWisata().subscribe((data) => {
        this.paketWisata = data;
      });
    }
  
    getPaketWisata() {
      return this.http.get<any[]>('http://localhost/bismillah_bisa/Infowisatas').pipe(
        map(data => {
          return data.map(paket => {
            return {
              id: paket.paket_id,
              gambar: 'https://example.com/gambar/' + paket.photo,
              nama: paket.nama_paket,
              harga: paket.harga,
              deskripsi: paket.paket_wisata,
              akomodasi: paket.akomodasi
            };
          });
        })
      );
    }
  }
  

  

  


// }
