import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing} from './app.routes';

//app modules
import {HomeModule} from './home';
import {AuthModule} from './auth';

//global services
import {UserService} from './shared';
import {AuthService} from './auth';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        routing,
        HttpModule,
        HomeModule,
        AuthModule
    ],
    providers: [
        UserService,
        AuthService
    ],
    entryComponents: [AppComponent],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
