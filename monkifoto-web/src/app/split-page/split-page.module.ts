import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPortfolioComponent } from './main-portfolio/main-portfolio.component';
import { SecondaryPortfolioComponent } from './secondary-portfolio/secondary-portfolio.component';
import { PortfolioComponent } from './portfolio/portfolio.component';



@NgModule({
  declarations: [
    MainPortfolioComponent,
    SecondaryPortfolioComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SplitPageModule { }
