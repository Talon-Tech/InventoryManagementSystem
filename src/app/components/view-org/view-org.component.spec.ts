import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrgComponent } from './view-org.component';

describe('ViewOrgComponent', () => {
  let component: ViewOrgComponent;
  let fixture: ComponentFixture<ViewOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
