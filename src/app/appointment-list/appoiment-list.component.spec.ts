import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentListComponent } from './appoiment-list.component';

describe('AppoimentListComponent', () => {
  let component: AppointmentListComponent;
  let fixture: ComponentFixture<AppointmentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentListComponent]
    });
    fixture = TestBed.createComponent(AppointmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
