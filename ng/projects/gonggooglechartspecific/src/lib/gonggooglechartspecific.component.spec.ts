import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GonggooglechartspecificComponent } from './gonggooglechartspecific.component';

describe('GonggooglechartspecificComponent', () => {
  let component: GonggooglechartspecificComponent;
  let fixture: ComponentFixture<GonggooglechartspecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GonggooglechartspecificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GonggooglechartspecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
