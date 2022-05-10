import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReponseFComponent } from './create-reponse-f.component';

describe('CreateReponseFComponent', () => {
  let component: CreateReponseFComponent;
  let fixture: ComponentFixture<CreateReponseFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReponseFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReponseFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
