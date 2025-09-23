import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrentTargetsComponent } from './components/current-targets/current-targets';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrentTargetsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}
