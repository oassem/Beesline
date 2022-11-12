import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOffersComponent } from './admin-offers.component';

describe('AdminOffersComponent', () => {
  let component: AdminOffersComponent;
  let fixture: ComponentFixture<AdminOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
