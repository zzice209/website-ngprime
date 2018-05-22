import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeketingComponent } from './beeketing.component';

describe('BeeketingComponent', () => {
  let component: BeeketingComponent;
  let fixture: ComponentFixture<BeeketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
