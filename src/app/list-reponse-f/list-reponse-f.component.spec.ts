import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReponseFComponent } from './list-reponse-f.component';

describe('ListReponseFComponent', () => {
  let component: ListReponseFComponent;
  let fixture: ComponentFixture<ListReponseFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReponseFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReponseFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
