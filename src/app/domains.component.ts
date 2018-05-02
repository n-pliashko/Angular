import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";
import {User} from "./user";

const config = require('../config/connConfig');
var $ = require("jquery");
var _ = require('lodash');

@Component({
    selector: 'my-domains',
    template: `
        <div class="project-context hidden-xs dropdown">
            <span class="label">Groups (Domains):</span>
            <span class="project-selector dropdown-toggle label" data-toggle="dropdown">
                 {{current_group ? current_group.name : ''}}
                <i *ngIf="user" class="fa fa-angle-down" [ngStyle]="{'margin-left':'15px'}"></i>
            </span>
            <ul *ngIf="user" class="dropdown-menu">
                <li *ngIf="current_group && current_group._id !== own_domain">
                    <a [ngStyle]="{'font-weight': 'bold'}" (click)="resetDomain($event)">OWN DOMAIN</a>
                </li>
                <li *ngFor="let group of user.allowedGroups">
                    <a [ngStyle]="{'font-weight': (current_group && current_group._id === group._id ? '15px' : '300')}"
                       (click)="changeDomain(group, $event)">{{group.name}}</a>
                </li>
            </ul>
        </div>`
})

export class DomainsComponent implements OnInit {
    own_domain: string;
    current_group: Object;
    user: User;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.user = this.authService.user;
        if (this.user) {
            this.own_domain = this.user._group_id;
            this.current_group = this.user.groupInfo;
        }
    }

    ngAfterContentChecked() {
        if (this.authService.isLoggedIn && this.authService.user) {
            this.user = this.authService.user;
            if (this.user) {
                this.current_group = this.user.groupInfo;
                if (!this.own_domain) {
                    this.own_domain = this.user._group_id;
                }
            }
        }
    }

    changeDomain(group: any, e: any) {
        let self = this;
        let ajax = config.token.groupEmulation;
        let ajax_options = {
            url: ajax.url.replace(':group_id', group._id),
            dataType: 'JSON',
            cache: false,
            contentType: 'application/json',
            headers: {},
            method: 'GET'
        };

        if (ajax.token) {
            ajax_options.headers = {
                'Authorization': localStorage.getItem('token')
            }
        }

        if (ajax.method) {
            ajax_options.method = ajax.method
        }

        $.ajax(_.extend(ajax_options, {
            success: function (data: any) {
                if (data.error) {
                    let error = data.error.message ? data.error.message : data.error
                    let message = typeof error === 'object' ? JSON.stringify(error) : error
                    if (data.error.name && data.error[data.error.name]) {
                        message = data.error[data.error.name].message ? data.error[data.error.name].message : data.error.message
                    }
                } else {
                    self.current_group = group.name;
                    self.authService.getUserInfo().subscribe();
                }
            }.bind(this),
            error: function (xhr: any, status: any, err: any) {
                let message = xhr.responseJSON && xhr.responseJSON.error ? xhr.responseJSON.error : xhr.responseText
                if (message.name && message[message.name]) {
                    message = message[message.name].message ? message[message.name].message : message.message
                } else if (message.message) {
                    message = message.message;
                }
                console.error(ajax_options.url, status, err.toString())
            }.bind(this)
        }))
    }

    resetDomain(e: any) {
        let self = this;
        let ajax = config.token.groupEmulationDisabling;
        let ajax_options = {
            url: ajax.url,
            dataType: 'JSON',
            cache: false,
            contentType: 'application/json',
            headers: {},
            method: 'GET'
        };

        if (ajax.token) {
            ajax_options.headers = {
                'Authorization': localStorage.getItem('token')
            }
        }

        if (ajax.method) {
            ajax_options.method = ajax.method
        }

        $.ajax(_.extend(ajax_options, {
            success: function (data: any) {
                if (data.error) {
                    let error = data.error.message ? data.error.message : data.error
                    let message = typeof error === 'object' ? JSON.stringify(error) : error
                    if (data.error.name && data.error[data.error.name]) {
                        message = data.error[data.error.name].message ? data.error[data.error.name].message : data.error.message
                    }
                } else {
                    self.authService.getUserInfo().subscribe();
                }
            }.bind(this),
            error: function (xhr: any, status: any, err: any) {
                let message = xhr.responseJSON && xhr.responseJSON.error ? xhr.responseJSON.error : xhr.responseText
                if (message.name && message[message.name]) {
                    message = message[message.name].message ? message[message.name].message : message.message
                } else if (message.message) {
                    message = message.message;
                }
                console.error(ajax_options.url, status, err.toString())
            }.bind(this)
        }))
    }
}