import { Component } from '@angular/core';
import { CurrentTargetsComponent } from "../components/current-targets/current-targets";

@Component({
  selector: 'app-home',
  imports: [CurrentTargetsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class Home {

}
