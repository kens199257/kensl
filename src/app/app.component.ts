import { Component,ViewChild } from '@angular/core';
import { Platform,NavController,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { SettingsPage } from '../pages/settings/settings';
import { ProfilePage } from '../pages/profile/profile';
// import { MenuController } from 'ionic-angular/components/app/menu-controller';
// import { ViewChild } from '@angular/core/src/metadata/di';
// import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = SigninPage;
  homePage = HomePage; 
  settingsPage = SettingsPage;
  profilePage = ProfilePage
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    firebase.initializeApp({
      apiKey: "AIzaSyDjN1zye2y_hAn2AQIKC7Cf_vW_hiXgNxw",
      authDomain: "kens-1ef18.firebaseapp.com",
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout(){
    
  }
}

