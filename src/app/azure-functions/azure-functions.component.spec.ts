import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureFunctionsComponent } from './azure-functions.component';

describe('AzureFunctionsComponent', () => {
  let component: AzureFunctionsComponent;
  let fixture: ComponentFixture<AzureFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzureFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
