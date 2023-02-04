import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadshotsComponent } from './headshots/headshots.component';
import { HomeComponent } from './home/home.component';
import { InquireComponent } from './inquire/inquire.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { WeddingGalleryComponent } from './wedding-gallery/wedding-gallery.component';

const routes: Routes = [
  {path:'wedding-gallery', component: WeddingGalleryComponent},
  {path:'real-estate', component: RealEstateComponent},
  {path:'inqure', component:InquireComponent},
  {path:'headshots', component: HeadshotsComponent},
  {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
