import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRendezVousComponent } from './update-rendez-vous.component';

describe('UpdateRendezVousComponent', () => {
  let component: UpdateRendezVousComponent;
  let fixture: ComponentFixture<UpdateRendezVousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRendezVousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
