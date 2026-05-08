import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMarkdown } from 'ngx-markdown';

import { ProjectView } from './project-view';

describe('ProjectView', () => {
  let component: ProjectView;
  let fixture: ComponentFixture<ProjectView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectView],
      providers: [provideMarkdown()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
