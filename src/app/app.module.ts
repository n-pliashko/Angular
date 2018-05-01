import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule }   from '@angular/common/http';


import {AppComponent} from './app.component';
import {LoginComponent} from './login.component';
import {HomeComponent} from './home.component';
import {HeaderComponent} from './header.component';
import {DomainsComponent} from './domains.component';
import {AuthService} from "./auth.service";
import {MenuComponent} from "./menu.component";

import {
    AuthGuardService as AuthGuard
} from './auth-guard.service';
import {LoaderComponent} from "./loader.component";

const appRoutes: Routes = [
    { path: '', component: AppComponent},
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    { path: 'load', component: LoaderComponent},
    {
        path: 'menu',
        component: MenuComponent,
        canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports:[BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule],
    declarations: [AppComponent, LoginComponent, HomeComponent, HeaderComponent, DomainsComponent, MenuComponent, LoaderComponent],
    bootstrap: [AppComponent],
    providers: [ AuthService, AuthGuard ]
})
export class AppModule{}