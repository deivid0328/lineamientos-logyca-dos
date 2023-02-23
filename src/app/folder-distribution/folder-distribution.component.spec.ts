import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderDistributionComponent } from './folder-distribution.component';

describe('FolderDistributionComponent', () => {
  let component: FolderDistributionComponent;
  let fixture: ComponentFixture<FolderDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderDistributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
