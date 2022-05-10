import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSujetFComponent } from './create-sujet-f.component';

describe('CreateSujetFComponent', () => {
  let component: CreateSujetFComponent;
  let fixture: ComponentFixture<CreateSujetFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSujetFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSujetFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
