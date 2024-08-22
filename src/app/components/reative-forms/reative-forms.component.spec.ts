import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativeFormsComponent } from './reative-forms.component';

describe('ReativeFormsComponent', () => {
  let component: ReativeFormsComponent;
  let fixture: ComponentFixture<ReativeFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReativeFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReativeFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
