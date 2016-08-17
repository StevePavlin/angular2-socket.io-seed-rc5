/**
 * Created by Winter on 2016-08-17.
 */
import { RouterModule }  from '@angular/router';

import { HomeComponent } from './home.component';

export const routing = RouterModule.forChild([
    { path: 'home', component: HomeComponent}
]);
