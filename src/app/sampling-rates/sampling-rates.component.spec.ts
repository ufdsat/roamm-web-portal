import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplingRatesComponent } from './sampling-rates.component';

describe('SamplingRatesComponent', () => {
  let component: SamplingRatesComponent;
  let fixture: ComponentFixture<SamplingRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplingRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplingRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
