import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLink } from './social-link';

describe('SocialLink', () => {
  let component: SocialLink;
  let fixture: ComponentFixture<SocialLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialLink],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialLink);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('icon', 'github');
    fixture.componentRef.setInput('name', 'GitHub');
    fixture.componentRef.setInput('href', 'https://github.com');
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
