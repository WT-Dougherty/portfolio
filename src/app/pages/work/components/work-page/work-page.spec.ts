import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMarkdown } from 'ngx-markdown';

import { WorkPage } from './work-page';

describe('WorkPage', () => {
  let component: WorkPage;
  let fixture: ComponentFixture<WorkPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkPage],
      providers: [provideMarkdown()],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
