import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdemandesComponent } from './mdemandes.component';

describe('MdemandesComponent', () => {
  let component: MdemandesComponent;
  let fixture: ComponentFixture<MdemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
