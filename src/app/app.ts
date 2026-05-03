import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParticleGrid } from './shared/particle-background/component/particle-grid/particle-grid';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParticleGrid],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio');
}
