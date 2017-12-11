import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitComponentComponent } from './unit-component.component';

describe('UnitComponentComponent', () => {
  let component: UnitComponentComponent;
  let fixture: ComponentFixture<UnitComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have unit-component class',()=>{
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p.unit-component').textContent).toContain('unit-component works!');
  });

});
