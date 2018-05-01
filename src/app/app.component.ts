import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from './auth.service';
import {User} from './user';

@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
    user: User;

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
        console.log('App:::', this.authService.user)
      /*  this.authService.getUser().subscribe(data => {
            this.router.navigate(['home']);
            console.log('after::', this.authService.isLoggedIn, this.authService.user)
        }, error => {
            console.log('getUser error', error);
            this.router.navigate(['login']);
        });
        console.log(this.authService.isLoggedIn, this.authService.user)*/
    }
}