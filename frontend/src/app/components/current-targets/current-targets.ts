import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-targets',
  imports: [CommonModule],
  templateUrl: './current-targets.html',
  styleUrls: ['./current-targets.scss']
})
export class CurrentTargetsComponent {
  months = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 4000 },
    { name: 'Mar', value: 4000 },
    { name: 'Apr', value: 4000 },
    { name: 'May', value: 4000 },
    { name: 'Jun', value: 4000 },
    { name: 'Jul', value: 4000 },
    { name: 'Aug', value: 4000 },
    { name: 'Sep', value: 4000 },
    { name: 'Oct', value: 4000 },
    { name: 'Nov', value: 4000 },
    { name: 'Dec', value: 4000 },
  ];
}
