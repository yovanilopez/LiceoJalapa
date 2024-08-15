import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeritocompuComponent } from './peritocompu.component';

describe('PeritocompuComponent', () => {
  let component: PeritocompuComponent;
  let fixture: ComponentFixture<PeritocompuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeritocompuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeritocompuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
