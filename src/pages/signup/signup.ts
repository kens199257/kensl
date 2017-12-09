import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SigninPage } from '../signin/signin';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService } from '../../services/auth';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
  }
  
  onSignup(form: NgForm){
    this.authService.signup(form.value.email, form.value.password)
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }


  onGoToSignIn(){
    this.navCtrl.pop();
  }
}
