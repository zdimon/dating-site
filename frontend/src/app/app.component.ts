import { Component, OnInit, Inject } from '@angular/core';
import { APP_CONFIG } from './settings';
import {Router} from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isCollapsed = true;
  constructor(private router: Router) { }

  ngOnInit(){
    if (localStorage.getItem('is_auth') == 'false') {
        this.router.navigate(['/login']);
    }
  }

}
