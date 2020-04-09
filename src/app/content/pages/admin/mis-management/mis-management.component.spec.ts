import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisManagementComponent } from './mis-management.component';

describe('MisManagementComponent', () => {
  let component: MisManagementComponent;
  let fixture: ComponentFixture<MisManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
