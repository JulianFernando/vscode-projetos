import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloChildComponent } from './titulo-child.component';

describe('TituloChildComponent', () => {
  let component: TituloChildComponent;
  let fixture: ComponentFixture<TituloChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
