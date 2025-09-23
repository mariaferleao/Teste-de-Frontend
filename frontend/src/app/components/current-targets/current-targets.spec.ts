import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTargetsComponent } from './current-targets';

describe('CurrentTargets', () => {
  let component: CurrentTargetsComponent;
  let fixture: ComponentFixture<CurrentTargetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentTargetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
