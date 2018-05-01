import { Component} from '@angular/core';
import { NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import { AuthService} from './auth.service';

@Component({
    selector: 'my-app',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 1px;}
        input.ng-touched.ng-valid {border:solid green 1px;}
    `],
    template: `<div id="extr-page">
        <header id="header" class="animated fadeInDown">
            <a routerLink="/menu">Menu</a>
            <div id="logo-group">
                <span id="logo"> <img src="assets/img/ss_logo.png" alt="SelectSpecs"/> </span>
            </div>

        </header>
        <div id="main" role="main" class="animated fadeInDown">

            <div id="content" class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 hidden-xs hidden-sm">
                        <h1 class="txt-color-red login-header-big">SelectSpecs API administration system</h1>

                        <div class="hero">
                            <div class="pull-left login-desc-box-l">
                                <img src="assets/img/demo/content-health.jpg" class="pull-right display-image" alt=""/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <h5 class="about-heading">Our contacts:</h5>

                                <p>
                                    <a href="http://selectspecs.com">http://selectspecs.com</a>
                                </p>
                                <p>
                                    © SelectSpecs.com 2016
                                </p>
                                <p>
                                    UK Company No: 6435182.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                        <div class="well no-padding">
                            <form #loginForm="ngForm"
                                  (ngSubmit)="onLogin(loginForm)"
                                  class="smart-form client-form"  method="POST">
                                <header>
                                    Sign In
                                </header>
                                <fieldset>
                                    <section>
                                        <label class="label">E-mail</label>
                                        <label class="input"> <i class="icon-append fa fa-user"></i>
                                            <input type="email" name="email"
                                                   required email ngModel
                                                   #email="ngModel"/>
                                            <div [hidden]="email.valid || email.untouched" class="alert alert-danger">
                                                Please enter a VALID email address
                                            </div>
                                            <b class="tooltip tooltip-top-right"><i class="fa fa-user txt-color-teal"></i>
                                                Please enter email address/username</b></label>
                                    </section>
                                    <section>
                                        <label class="label">Password</label>
                                        <label class="input"> <i class="icon-append fa fa-lock"></i>
                                            <input type="password" name="password"
                                                   ng-minlength="3" ng-maxlength="20" required ngModel
                                                   #password="ngModel"/>
                                            <div [hidden]="password.valid || password.untouched" class="alert alert-danger">
                                                Please enter your email password
                                            </div>
                                            <b class="tooltip tooltip-top-right"><i class="fa fa-lock txt-color-teal"></i> Enter
                                                your password</b> </label>
                                    </section>
                                </fieldset>
                                <footer>
                                    <button type="submit" class="btn btn-primary" [disabled]="loginForm.invalid">
                                        Sign in
                                    </button>
                                </footer>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="dialogErrorResult">
        </div>
    </div>`
})
export class LoginComponent {
    constructor(private authService: AuthService, private router: Router){}

    onLogin(form: NgForm){
        this.authService.login(form.value.email, form.value.password)
            .subscribe(
                (data) => {
                    console.log('response::', data);
                    if (data) {
                        this.router.navigate(['load']);
                    }
                }
            );
    }
}