import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarWSideNavComponent } from './tool-bar-w-side-nav.component';

describe('ToolBarWSideNavComponent', () => {
  let component: ToolBarWSideNavComponent;
  let fixture: ComponentFixture<ToolBarWSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolBarWSideNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolBarWSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
