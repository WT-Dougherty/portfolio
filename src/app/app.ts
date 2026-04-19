import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Headshot } from './pages/about/components/headshot/headshot';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Headshot],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio');
}
