import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MseanceComponent } from './mseance.component';

describe('MseanceComponent', () => {
  let component: MseanceComponent;
  let fixture: ComponentFixture<MseanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MseanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MseanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
