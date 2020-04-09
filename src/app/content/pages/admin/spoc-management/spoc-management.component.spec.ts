import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpocManagementComponent } from './spoc-management.component';

describe('SpocManagementComponent', () => {
  let component: SpocManagementComponent;
  let fixture: ComponentFixture<SpocManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpocManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpocManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
