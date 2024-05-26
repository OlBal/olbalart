import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrcssComponent } from './prcss.component';

describe('PrcssComponent', () => {
  let component: PrcssComponent;
  let fixture: ComponentFixture<PrcssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrcssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
