import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

const config = require('../config/connConfig');
import {User} from './user';

@Injectable()
export class AuthService {
    token: string;

    private _loggedIn: boolean;
    private _user: User;

    constructor(private http: HttpClient) {
        this.token = window.localStorage.getItem('token');
        this.getUserInfo().subscribe(user => this._user = user);
    }

    get user(): User {
        return this._user;
    }

    get isLoggedIn(): boolean {
        return  this._loggedIn;
    }

    getUserInfo(): Observable<User> {
        console.log('getUser call', this.token);
        if (this.token) {
            const headers = new HttpHeaders().set('Authorization', this.token);
            return this.http.get(config.token.getInfo, {headers: headers}).map(data => {
                if (data['error']) {
                    console.log('data[\'error\']:::', data['error']);
                    return Observable.throw(data['error']);
                }
                let user = {...data['result']['data']};
                this.getGroupInfo(data['result']['_group_id']).subscribe(data => user.groupInfo = data);
                this.getAccess().subscribe(data => user.accessInfo = data);
                this.getAllowedGroups().subscribe(data => user.allowedGroups = data);
                console.log('getUser:::', user);
                this._loggedIn = true;
                this._user = user;
                return user;
            }).catch((error: any) => {
                console.log('catch error:::', error);
                return Observable.throw(error);
            });
        } else {
            return Observable.of(new User());
        }
    }

    login(email: string, password: string): Observable<boolean> {
        const body = {email: email, password: password};
        return this.http.post(config.urlApiHost + 'manager/auth', body).map(data => {
            console.log('login:::', data);
            let isLogin = false;
            if (data && data['token']) {
                isLogin = true;
                this._loggedIn = true;
                this.token = data['token'] = data['token'];
                window.localStorage.setItem('token', data['token']);
                this.getUserInfo().subscribe(user => this._user = user);
            }
            return isLogin;
        });
    }

    getGroupInfo(groupID: string) {
        const headers = new HttpHeaders().set('Authorization', this.token);
        let ajax = config.groups.ajaxGet;
        return this.http.get(ajax.url.replace(':pk', groupID), {headers: headers}).map(data => data);
    }

    getAccess() {
        const headers = new HttpHeaders().set('Authorization', this.token);
        return this.http.get(config.token.getAccess, {headers: headers});
    }

    getAllowedGroups() {
        const headers = new HttpHeaders().set('Authorization', this.token);
        return this.http.get(config.managers.getSubgroupsList.url, {headers: headers});
    }

    logout(): Observable<boolean> {
        const headers = new HttpHeaders().set('Authorization', this.token);
        return this.http.post(config.token.cancel, {}, {headers: headers}).map(data => {
            let logout = false;
            if (!data['error']) {
                logout = true;
                this._loggedIn = false;
                window.localStorage.removeItem('token');
            }
            return logout;
        });
    }
}