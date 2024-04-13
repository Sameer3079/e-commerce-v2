import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayItemBlockComponent } from './display-item-block.component';

describe('DisplayItemBlockComponent', () => {
  let component: DisplayItemBlockComponent;
  let fixture: ComponentFixture<DisplayItemBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayItemBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayItemBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
