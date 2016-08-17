/**
 * Created by Winter on 2016-08-17.
 */

import { NgModule } from '@angular/core';

import { routing } from './auth.routing';
import {LoginComponent} from './login';
import {AuthComponent} from './auth';

@NgModule({
    imports: [  
        routing
    ],
    declarations: [ AuthComponent, LoginComponent ],
    providers:    [ ]
})
export class AuthModule { }

