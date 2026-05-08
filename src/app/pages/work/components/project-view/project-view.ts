import { Component } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-project-view',
  imports: [MarkdownComponent],
  templateUrl: './project-view.html',
})
export class ProjectView {}
