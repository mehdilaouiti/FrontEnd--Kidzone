import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationListFComponent } from './publication-list-f.component';

describe('PublicationListFComponent', () => {
  let component: PublicationListFComponent;
  let fixture: ComponentFixture<PublicationListFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationListFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationListFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
