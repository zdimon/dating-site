import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './service/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';
import { AuthModule } from './auth/auth.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FacadeService } from './facade';
import { APP_CONFIG, config, SettingClass } from './settings';
import { InitService } from './service/init.service';

export function init_app(init_service: InitService) {
  return () => init_service.init();
}

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule,
    CollapseModule.forRoot()
  ],
  providers: [LoginService,FacadeService,InitService,
  {
    provide: APP_CONFIG,
    useClass: SettingClass
  },
  {
    provide: APP_INITIALIZER,
    useFactory: init_app,
    deps: [InitService],
    multi: true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
