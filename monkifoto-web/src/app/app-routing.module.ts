import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeddingGalleryComponent } from './wedding-gallery/wedding-gallery.component';

const routes: Routes = [
  {path:'wedding-gallery', component: WeddingGalleryComponent},
  {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
