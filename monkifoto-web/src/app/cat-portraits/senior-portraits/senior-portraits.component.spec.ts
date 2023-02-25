import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorPortraitsComponent } from './senior-portraits.component';

describe('SeniorPortraitsComponent', () => {
  let component: SeniorPortraitsComponent;
  let fixture: ComponentFixture<SeniorPortraitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorPortraitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeniorPortraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
