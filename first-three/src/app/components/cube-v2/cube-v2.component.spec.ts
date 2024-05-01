import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeV2Component } from './cube-v2.component';

describe('CubeV2Component', () => {
  let component: CubeV2Component;
  let fixture: ComponentFixture<CubeV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CubeV2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CubeV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
