import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPendingCardComponent } from './orders-pending-card.component';

describe('OrdersPendingCardComponent', () => {
  let component: OrdersPendingCardComponent;
  let fixture: ComponentFixture<OrdersPendingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersPendingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersPendingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
