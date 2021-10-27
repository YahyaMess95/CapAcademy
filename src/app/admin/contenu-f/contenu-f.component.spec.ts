import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuFComponent } from './contenu-f.component';

describe('ContenuFComponent', () => {
  let component: ContenuFComponent;
  let fixture: ComponentFixture<ContenuFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenuFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenuFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
