import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadshotsComponent } from './cat-portraits/headshots/headshots.component';
import { HomeComponent } from './home/home.component';
import { InquireComponent } from './inquire/inquire.component';
import { RealEstateComponent } from './cat-architecture/real-estate/real-estate.component';
import { PortfolioComponent } from './split-page/portfolio/portfolio.component';
import { WeddingGalleryComponent } from './cat-events/wedding-gallery/wedding-gallery.component';
import { SeniorPortraitsComponent } from './cat-portraits/senior-portraits/senior-portraits.component';
import { StudioComponent } from './cat-studio/studio/studio.component';
import { ProductComponent } from './cat-studio/product/product.component';

const routes: Routes = [
  {path:'', component:HomeComponent}, // Default page
  {path:'wedding-gallery', component: WeddingGalleryComponent},
  {path: 'senior', component: SeniorPortraitsComponent},
  {path:'real-estate', component: RealEstateComponent},
  {path:'inquire', component:InquireComponent},
  {path:'headshots', component: HeadshotsComponent},
  {path:'home', component: HomeComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'studio', component: StudioComponent},
  {path:'product', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
