import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionesHTTPComponent } from './peticiones-http.component';

describe('PeticionesHTTPComponent', () => {
  let component: PeticionesHTTPComponent;
  let fixture: ComponentFixture<PeticionesHTTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeticionesHTTPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionesHTTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
