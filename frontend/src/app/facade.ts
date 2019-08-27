export { LoginService } from './service/login.service';

import { LoginService } from './service/login.service';
import { Injector, Injectable } from '@angular/core';
@Injectable()
export class FacadeService {

  private _loginService: LoginService;
  public get loginService(): LoginService {
    if(!this._loginService){
      this._loginService = this.injector.get(LoginService);
    }
    return this._loginService;
  }

  constructor(private injector: Injector) {  }

}
