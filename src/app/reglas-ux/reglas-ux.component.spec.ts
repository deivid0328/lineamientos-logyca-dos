import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglasUXComponent } from './reglas-ux.component';

describe('ReglasUXComponent', () => {
  let component: ReglasUXComponent;
  let fixture: ComponentFixture<ReglasUXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReglasUXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglasUXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
