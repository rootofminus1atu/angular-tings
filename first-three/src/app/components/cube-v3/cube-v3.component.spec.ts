import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeV3Component } from './cube-v3.component';

describe('CubeV3Component', () => {
  let component: CubeV3Component;
  let fixture: ComponentFixture<CubeV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CubeV3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CubeV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
