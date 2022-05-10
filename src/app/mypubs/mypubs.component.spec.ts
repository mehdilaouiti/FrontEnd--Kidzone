import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypubsComponent } from './mypubs.component';

describe('MypubsComponent', () => {
  let component: MypubsComponent;
  let fixture: ComponentFixture<MypubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
