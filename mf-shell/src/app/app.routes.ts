import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'login',
  //   loadComponent: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //       exposedModule: './LoginComponent',
  //     }).then((m) => m.LoginComponent),
  // },
  // {
  //   path: 'dashboard',
  //   loadComponent: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:4202/remoteEntry.js',
  //       exposedModule: './LayoutComponent',
  //     }).then((m) => m.LayoutComponent),
  // },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
