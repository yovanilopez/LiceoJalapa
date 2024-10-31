import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinsemanaComponent } from './finsemana.component';

describe('FinsemanaComponent', () => {
  let component: FinsemanaComponent;
  let fixture: ComponentFixture<FinsemanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinsemanaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinsemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
