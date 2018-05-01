import {Component} from '@angular/core';
import {HeaderComponent} from './header.component';

@Component({
    selector: 'my-app',
    template: `
        <my-header></my-header>
        <div id="content">
            <h1 class="text-align-center">Welcome to SelectSpecs API administration system</h1>
        </div>`,
    providers: [HeaderComponent]
})

export class HomeComponent {
}