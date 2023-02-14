import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionOComponent } from './action-o.component';

describe('ActionOComponent', () => {
  let component: ActionOComponent;
  let fixture: ComponentFixture<ActionOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
