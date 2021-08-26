import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinmarmapComponent } from './tinmarmap.component';

describe('TinmarmapComponent', () => {
  let component: TinmarmapComponent;
  let fixture: ComponentFixture<TinmarmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinmarmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinmarmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
