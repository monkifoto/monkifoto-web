import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WeddingGalleryComponent } from './cat-events/wedding-gallery/wedding-gallery.component';
import { HomeComponent } from './home/home.component';
import { RealEstateComponent } from './cat-architecture/real-estate/real-estate.component';
import { InquireComponent } from './inquire/inquire.component';
import { HeadshotsComponent } from './cat-portraits/headshots/headshots.component';
import { FooterComponent } from './footer/footer.component';
import { SplitPageModule } from './split-page/split-page.module';
import { PortfolioComponent } from './split-page/portfolio/portfolio.component';
import { MainPortfolioComponent } from './split-page/main-portfolio/main-portfolio.component';
import { SecondaryPortfolioComponent } from './split-page/secondary-portfolio/secondary-portfolio.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SeniorPortraitsComponent } from './cat-portraits/senior-portraits/senior-portraits.component';
import { StudioComponent } from './cat-studio/studio/studio.component';
import { ProductComponent } from './cat-studio/product/product.component';
import { EventsComponent } from './cat-events/events/events.component';
import { EngagmentsComponent } from './cat-events/engagments/engagments.component';
import { CorporateComponent } from './cat-events/corporate/corporate.component';
import { FamilyComponent } from './cat-portraits/family/family.component';
import { AutomotiveComponent } from './cat-personal/automotive/automotive.component';
import { LandscapesComponent } from './cat-personal/landscapes/landscapes.component';
import { PortraitsComponent } from './cat-portraits/portraits/portraits.component';
import { PersonalComponent } from './cat-personal/personal/personal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeddingGalleryComponent,
    HomeComponent,
    RealEstateComponent,
    InquireComponent,
    HeadshotsComponent,
    FooterComponent,
    SeniorPortraitsComponent,
    StudioComponent,
    ProductComponent,
    EventsComponent,
    EngagmentsComponent,
    CorporateComponent,
    FamilyComponent,
    AutomotiveComponent,
    LandscapesComponent,
    PortraitsComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SplitPageModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
