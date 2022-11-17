import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersRejectedCardComponent } from './orders-rejected-card.component';

describe('OrdersRejectedCardComponent', () => {
  let component: OrdersRejectedCardComponent;
  let fixture: ComponentFixture<OrdersRejectedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersRejectedCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersRejectedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
