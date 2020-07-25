import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { File } from '@ionic-native/file/ngx';
import { LogoutBotton } from './components/logout/logout.botton'
import { EstagioService } from './pages/estagio/estagio.service';


@NgModule({
  declarations: [
    AppComponent,
    LogoutBotton
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LoginService,
    EstagioService,
    PreviewAnyFile,
    File
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
