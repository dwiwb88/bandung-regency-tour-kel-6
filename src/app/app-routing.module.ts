import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaftarbookingComponent } from './daftarbooking/daftarbooking.component';
import { GaleriComponent } from './galeri/galeri.component';
import { HomeComponent } from './home/home.component';
import { InfohotelComponent } from './infohotel/infohotel.component';
import { InfowisataComponent } from './infowisata/infowisata.component';
import { PaketwisataComponent } from './paketwisata/paketwisata.component';
import { RekapbookingComponent } from './rekapbooking/rekapbooking.component';
import { TentangComponent } from './tentang/tentang.component';


const routes: Routes = [

  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "paketwisata",
    component: PaketwisataComponent
  },
  {
    path: "infowisata",
    component: InfowisataComponent
  },
  {
    path: "tentang",
    component: TentangComponent
  },
  {
    path: "infohotel",
    component:InfohotelComponent
  },
  {
    path: "galeri",
    component:GaleriComponent
  },
  {
    path: "daftarbooking",
    component:DaftarbookingComponent
  },

  {
    path: "rekapbooking",
    component:RekapbookingComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
