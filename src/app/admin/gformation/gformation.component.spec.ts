import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GformationComponent } from './gformation.component';

describe('GformationComponent', () => {
  let component: GformationComponent;
  let fixture: ComponentFixture<GformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
