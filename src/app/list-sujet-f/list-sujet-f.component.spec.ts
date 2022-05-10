import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSujetFComponent } from './list-sujet-f.component';

describe('ListSujetFComponent', () => {
  let component: ListSujetFComponent;
  let fixture: ComponentFixture<ListSujetFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSujetFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSujetFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
