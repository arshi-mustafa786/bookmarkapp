import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logincomponent } from './logincomponent.component';

describe('LogincomponentComponent', () => {
  let component: Logincomponent;
  let fixture: ComponentFixture<Logincomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logincomponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Logincomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
