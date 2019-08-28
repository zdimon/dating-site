import {Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { APP_CONFIG } from '../settings';


@Injectable()
export class InitService {

  constructor(
    @Inject(APP_CONFIG) private app_config,
    private http: HttpClient
    ){}

  public init() {
    this.http.get(`${this.app_config.APIurl}/init`).subscribe(
      data => {
        localStorage.setItem('is_auth', 'true');
      },
      err => {
        localStorage.setItem('is_auth', 'false');
      }
    );
  }
}
