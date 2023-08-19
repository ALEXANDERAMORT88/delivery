import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatenateUsComponent } from './concatenate-us.component';

describe('ConcatenateUsComponent', () => {
  let component: ConcatenateUsComponent;
  let fixture: ComponentFixture<ConcatenateUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcatenateUsComponent]
    });
    fixture = TestBed.createComponent(ConcatenateUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
