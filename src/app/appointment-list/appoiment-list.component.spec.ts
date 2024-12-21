import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoimentListComponent } from './appoiment-list.component';

describe('AppoimentListComponent', () => {
  let component: AppoimentListComponent;
  let fixture: ComponentFixture<AppoimentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppoimentListComponent]
    });
    fixture = TestBed.createComponent(AppoimentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
