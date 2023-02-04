import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekapbookingComponent } from './rekapbooking.component';

describe('RekapbookingComponent', () => {
  let component: RekapbookingComponent;
  let fixture: ComponentFixture<RekapbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekapbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
