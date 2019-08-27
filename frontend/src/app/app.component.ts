import { Component, OnInit, Inject } from '@angular/core';
import { APP_CONFIG } from './settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isCollapsed = true;
  constructor(){

  }
}
