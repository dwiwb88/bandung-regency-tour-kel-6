import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { paketwisataModel } from './paketwisata.model';

@Injectable({
  providedIn: 'root'
})
export class PaketwisataService {

  

  constructor(private http: HttpClient) { }
  paketWisata: any[];

  ngOnInit(): void {
    this.getPaketWisata().subscribe((data) => {
      this.paketWisata = data;
    });
  }

  getPaketWisata() {
    return this.http.get<any[]>('https://example.com/api/paket-wisata').pipe(
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