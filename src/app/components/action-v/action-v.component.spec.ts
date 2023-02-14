import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionVComponent } from './action-v.component';

describe('ActionVComponent', () => {
  let component: ActionVComponent;
  let fixture: ComponentFixture<ActionVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
