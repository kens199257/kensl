import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService } from '../../services/auth';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthService) {
  }

  onSignin(form: NgForm){
    this.authService.signin(form.value.email, form.value.password)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  onGoToSignUp(){
    this.navCtrl.push(SignupPage);
  }

}
