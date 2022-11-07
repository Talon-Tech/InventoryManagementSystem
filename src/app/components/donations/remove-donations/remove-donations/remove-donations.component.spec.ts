import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDonationsComponent } from './remove-donations.component';

describe('RemoveDonationsComponent', () => {
  let component: RemoveDonationsComponent;
  let fixture: ComponentFixture<RemoveDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveDonationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
