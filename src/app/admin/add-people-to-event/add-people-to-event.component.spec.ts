import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPeopleToEventComponent } from './add-people-to-event.component';

describe('AddPeopleToEventComponent', () => {
  let component: AddPeopleToEventComponent;
  let fixture: ComponentFixture<AddPeopleToEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPeopleToEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPeopleToEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
