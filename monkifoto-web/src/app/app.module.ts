import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WeddingGalleryComponent } from './wedding-gallery/wedding-gallery.component';
import { HomeComponent } from './home/home.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { InquireComponent } from './inquire/inquire.component';
import { HeadshotsComponent } from './headshots/headshots.component';
import { FooterComponent } from './footer/footer.component';
import { SplitPageModule } from './split-page/split-page.module';
import { PortfolioComponent } from './split-page/portfolio/portfolio.component';
import { MainPortfolioComponent } from './split-page/main-portfolio/main-portfolio.component';
import { SecondaryPortfolioComponent } from './split-page/secondary-portfolio/secondary-portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeddingGalleryComponent,
    HomeComponent,
    RealEstateComponent,
    InquireComponent,
    HeadshotsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SplitPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
