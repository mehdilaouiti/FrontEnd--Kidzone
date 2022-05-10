import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListForumFComponent } from './list-forum-f.component';

describe('ListForumFComponent', () => {
  let component: ListForumFComponent;
  let fixture: ComponentFixture<ListForumFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListForumFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListForumFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
