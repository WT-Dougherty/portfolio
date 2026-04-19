import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headshot } from './headshot';

describe('Headshot', () => {
  let component: Headshot;
  let fixture: ComponentFixture<Headshot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headshot],
    }).compileComponents();

    fixture = TestBed.createComponent(Headshot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
