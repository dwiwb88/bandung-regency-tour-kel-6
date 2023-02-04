import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarbookingComponent } from './daftarbooking.component';

describe('DaftarbookingComponent', () => {
  let component: DaftarbookingComponent;
  let fixture: ComponentFixture<DaftarbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
