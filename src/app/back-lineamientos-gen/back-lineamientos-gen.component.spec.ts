import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackLineamientosGenComponent } from './back-lineamientos-gen.component';

describe('BackLineamientosGenComponent', () => {
  let component: BackLineamientosGenComponent;
  let fixture: ComponentFixture<BackLineamientosGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackLineamientosGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackLineamientosGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
