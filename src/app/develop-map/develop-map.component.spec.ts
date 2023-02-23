import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopMapComponent } from './develop-map.component';

describe('DevelopMapComponent', () => {
  let component: DevelopMapComponent;
  let fixture: ComponentFixture<DevelopMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
