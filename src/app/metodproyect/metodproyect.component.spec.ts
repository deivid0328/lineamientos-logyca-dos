import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodproyectComponent } from './metodproyect.component';

describe('MetodproyectComponent', () => {
  let component: MetodproyectComponent;
  let fixture: ComponentFixture<MetodproyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetodproyectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodproyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
