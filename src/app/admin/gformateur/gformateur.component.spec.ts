import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GformateurComponent } from './gformateur.component';

describe('GformateurComponent', () => {
  let component: GformateurComponent;
  let fixture: ComponentFixture<GformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
