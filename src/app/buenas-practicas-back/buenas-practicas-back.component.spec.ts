import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuenasPracticasBackComponent } from './buenas-practicas-back.component';

describe('BuenasPracticasBackComponent', () => {
  let component: BuenasPracticasBackComponent;
  let fixture: ComponentFixture<BuenasPracticasBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuenasPracticasBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuenasPracticasBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
