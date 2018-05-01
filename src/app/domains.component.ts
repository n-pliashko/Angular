import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";
import {User} from "./user";

@Component({
    selector: 'my-domains',
    template: `
        <div class="project-context hidden-xs dropdown">
            <span class="label">Groups (Domains):</span>
            <span class="project-selector dropdown-toggle label" data-toggle="dropdown">
                <i  *ngIf="user" class="fa fa-angle-down" [ngStyle]="{'margin-left':'15px'}"></i>
            </span>
            <ul *ngIf="user" class="dropdown-menu">
                <li *ngFor="let group of user.allowedGroups">
                    <a href="#">{{group.name}}</a>
                </li>
            </ul>
        </div>`
})

export class DomainsComponent implements OnInit{
    own_domain: string;
    group: Object;
    user: User;

    constructor(private authService: AuthService){
    }

    ngOnInit() {
        console.log('DomainsComponent:::', this.authService.user);
        this.user = this.authService.user;
        if (this.user) {
            this.own_domain = this.user._group_id;
            this.group = this.user.groupInfo;
        }
    }
}