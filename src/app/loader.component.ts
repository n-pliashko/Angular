import {Component} from '@angular/core';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'my-app',
    template: `
        <div>
            <div class="row">
                <h1 class="text-center bold">Authorization is in progress, please wait</h1>
            </div>
            <div class="row">
                <p class="text-center">If page not will load during several minutes, please <a
                        routerLink="home">click»</a> for redirect.</p>
            </div>
            <div class="loader"></div>
        </div>`
})

export class LoaderComponent{

    constructor(private authService: AuthService,  private router: Router) {
    }

    ngAfterContentChecked() {
        if (this.authService.isLoggedIn && this.authService.user) {
            this.router.navigate(['home'])
        }
    }
}