import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersAcceptedCardComponent } from './orders-accepted-card.component';

describe('OrdersAcceptedCardComponent', () => {
  let component: OrdersAcceptedCardComponent;
  let fixture: ComponentFixture<OrdersAcceptedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersAcceptedCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersAcceptedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
