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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
