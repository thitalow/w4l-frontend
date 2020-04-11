import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricepointComponent } from './pricepoint.component';

describe('PricepointComponent', () => {
  let component: PricepointComponent;
  let fixture: ComponentFixture<PricepointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricepointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricepointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
