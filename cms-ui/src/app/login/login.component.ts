import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  constructor() { }

  ngOnInit() {

    LoginComponent.handleSignInFormSubmit();
  }

  static handleSignInFormSubmit() {
    $('#m_login_signin_submit').click(function (e) {
      let form = $(this).closest('form');
      form.validate({
        rules: {
          email: {
            required: true,
            email: true
          },
          password: {
            required: true
          }
        }
      });
      if (!form.valid()) {
        e.preventDefault();
        return;
      }

    })
  }


  // static init() {
  //   LoginComponent.handleSignInFormSubmit();
  // }
}
