import { Routes,
    RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'auth', loadChildren: 'app/auth/auth.module' },
];

export const routing = RouterModule.forRoot(routes);
