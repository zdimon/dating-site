interface Settings {
  production: boolean;
  APIurl: string;
}

import {InjectionToken} from '@angular/core';

export const APP_CONFIG = new InjectionToken<SettingClass>('APP_CONFIG');

export const config = () => {
  return {
    production: false,
    APIurl: 'http://localhost:3000'
  }
}

export class SettingClass {
  production: boolean=  false;
  APIurl: string = 'http://localhost:8000';
}
