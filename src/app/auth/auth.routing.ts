/**
 * Created by Winter on 2016-08-17.
 */

import { RouterModule }  from '@angular/router';
import {LoginComponent} from './login';
import {AuthComponent} from './auth';

export const routing = RouterModule.forChild([
    { path: 'auth',
        component: AuthComponent,
        children: [
            { path: '', component: LoginComponent }
        ]
    }
]);

