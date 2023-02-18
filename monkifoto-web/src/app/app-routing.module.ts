import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadshotsComponent } from './headshots/headshots.component';
import { HomeComponent } from './home/home.component';
import { InquireComponent } from './inquire/inquire.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { PortfolioComponent } from './split-page/portfolio/portfolio.component';
import { WeddingGalleryComponent } from './wedding-gallery/wedding-gallery.component';

const routes: Routes = [
  {path:'', component:HomeComponent}, // Default page
  {path:'wedding-gallery', component: WeddingGalleryComponent},
  {path:'real-estate', component: RealEstateComponent},
  {path:'inquire', component:InquireComponent},
  {path:'headshots', component: HeadshotsComponent},
  {path:'home', component: HomeComponent},
  {path:'portfolio', component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
