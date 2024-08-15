import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BchilleratocompuComponent } from './bchilleratocompu.component';

describe('BchilleratocompuComponent', () => {
  let component: BchilleratocompuComponent;
  let fixture: ComponentFixture<BchilleratocompuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BchilleratocompuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BchilleratocompuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
