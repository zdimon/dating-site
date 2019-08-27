import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login.form',
  templateUrl: './login.form.component.html',
  styleUrls: ['./login.form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: any;
 
  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    this.user = {
      username: 'admin',
      password: 'admin'
    };
  }

  login(){
    this._loginService.login({'username': this.user.username, 'password': this.user.password});
  }
  logout(){
    this._loginService.logout();
  }
  refreshToken() {
    this._loginService.refreshToken();
  }
}
