import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaketwisataComponent } from './paketwisata/paketwisata.component';
import { InfowisataComponent } from './infowisata/infowisata.component';
import { TentangComponent } from './tentang/tentang.component';
import { InfohotelComponent } from './infohotel/infohotel.component';
import { GaleriComponent } from './galeri/galeri.component';
import { HomeComponent } from './home/home.component';
import { DaftarbookingComponent } from './daftarbooking/daftarbooking.component';
import { RekapbookingComponent } from './rekapbooking/rekapbooking.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaketwisataComponent,
    InfowisataComponent,
    TentangComponent,
    InfohotelComponent,
    GaleriComponent,
    HomeComponent,
    DaftarbookingComponent,
    RekapbookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
