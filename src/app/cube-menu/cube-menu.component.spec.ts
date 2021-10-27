import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeMenuComponent } from './cube-menu.component';

describe('CubeMenuComponent', () => {
  let component: CubeMenuComponent;
  let fixture: ComponentFixture<CubeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
