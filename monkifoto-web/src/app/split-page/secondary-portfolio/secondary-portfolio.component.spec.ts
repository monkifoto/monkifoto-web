import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryPortfolioComponent } from './secondary-portfolio.component';

describe('SecondaryPortfolioComponent', () => {
  let component: SecondaryPortfolioComponent;
  let fixture: ComponentFixture<SecondaryPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
