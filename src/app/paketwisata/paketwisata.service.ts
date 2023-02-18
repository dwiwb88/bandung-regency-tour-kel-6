import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaketwisataService {

  constructor(private http: HttpClient) { }
  get(link: string){
    return this.http.get(link).toPromise();
}

  listpaketwisata() {
    return this.http.get(`http://localhost/bismillah_bisa/Paketwisatas`);
  }
}
