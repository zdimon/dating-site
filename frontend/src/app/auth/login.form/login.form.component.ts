import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../../facade';

@Component({
  selector: 'app-login.form',
  templateUrl: './login.form.component.html',
  styleUrls: ['./login.form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: any;

  constructor(public _facadeService: FacadeService) { }

  ngOnInit() {
    this.user = {
      username: 'admin',
      password: 'admin'
    };
  }

  login(){
    this._facadeService.loginService.login({'username': this.user.username, 'password': this.user.password});
  }
  logout(){
    this._facadeService.loginService.logout();
  }
  refreshToken() {
    this._facadeService.loginService.refreshToken();
  }
}
