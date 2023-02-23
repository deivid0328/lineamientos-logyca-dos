import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoAzureComponent } from './uso-azure.component';

describe('UsoAzureComponent', () => {
  let component: UsoAzureComponent;
  let fixture: ComponentFixture<UsoAzureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsoAzureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsoAzureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
