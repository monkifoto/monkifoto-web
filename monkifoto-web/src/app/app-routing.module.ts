import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InquireComponent } from './inquire/inquire.component';
import { PortfolioComponent } from './split-page/portfolio/portfolio.component';

//Events
import { WeddingGalleryComponent } from './cat-events/wedding-gallery/wedding-gallery.component';
import { EngagmentsComponent } from './cat-events/engagments/engagments.component';
import { CorporateComponent } from './cat-events/corporate/corporate.component';
import { EventsComponent } from './cat-events/events/events.component';
//Portrait
import { HeadshotsComponent } from './cat-portraits/headshots/headshots.component';
import { SeniorPortraitsComponent } from './cat-portraits/senior-portraits/senior-portraits.component';
import { FamilyComponent } from './cat-portraits/family/family.component';
//Studio
import { StudioComponent } from './cat-studio/studio/studio.component';
import { ProductComponent } from './cat-studio/product/product.component';
//Architecture
import { RealEstateComponent } from './cat-architecture/real-estate/real-estate.component';
//Personal


const routes: Routes = [
  {path:'', component:HomeComponent}, // Default page
  {path:'wedding-gallery', component: WeddingGalleryComponent},
  {path:'engagment', component: EngagmentsComponent},
  {path:'corporate', component:CorporateComponent},
  {path: 'events', component: EventsComponent},
  {path: 'family', component: FamilyComponent},
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
