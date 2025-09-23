import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-targets',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './current-targets.html',
  styleUrl: './current-targets.scss'
})

export class CurrentTargetsComponent {
  months = [
    { short: 'Jan', value: 4000 },
    { short: 'Feb', value: 4000 },
    { short: 'Mar', value: 4000 },
    { short: 'Apr', value: 4000 },
    { short: 'May', value: 4000 },
    { short: 'Jun', value: 4000 },
    { short: 'Jul', value: 4000 },
    { short: 'Aug', value: 4000 },
    { short: 'Sep', value: 0 },
    { short: 'Oct', value: 0 },
    { short: 'Nov', value: 0 },
    { short: 'Dec', value: 0 },
  ];
}
