import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclosVidaComponent } from './ciclos-vida.component';

describe('CiclosVidaComponent', () => {
  let component: CiclosVidaComponent;
  let fixture: ComponentFixture<CiclosVidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiclosVidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CiclosVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
