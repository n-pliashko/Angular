import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login.component';
import {HomeComponent} from './home.component';
import {MenuComponent} from "./menu.component";

import {
    AuthGuardService as AuthGuard
} from './auth-guard.service';
import {LoaderComponent} from "./loader.component";

export const ROUTES: Routes = [
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