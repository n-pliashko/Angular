import {Component, Input} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from "@angular/router";
import {DomainsComponent} from "./domains.component"

@Component({
    selector: 'my-header',
    template: `
        <header id="header">
            <div id="logo-group">
                <span id="logo">
                    <img src="assets/img/logo.png"
                         alt="SmartAdmin"/>
                </span>
            </div>
            <my-domains></my-domains>
            <a routerLink="/menu">Menu</a>
            <div class="pull-right">
                <div id="logout" class="btn-header transparent pull-right">
                    <span> <a href="#" title="Sign Out"
                              (click)="onLogout($event)"><i
                            class="fa fa-sign-out"></i></a> </span>
                </div>
            </div>
        </header>`,
    providers: [DomainsComponent]
})

export class HeaderComponent {
    constructor(private authService: AuthService, private router: Router){}

    onLogout(e: any) {
        e.stopPropagation();
        e.preventDefault();
        this.authService.logout().subscribe(data => {
            if (data) {
                this.router.navigate(['login']);
            }
        });
    }
}