import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverPortalComponent } from './driver-portal.component';

describe('DriverPortalComponent', () => {
  let component: DriverPortalComponent;
  let fixture: ComponentFixture<DriverPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
