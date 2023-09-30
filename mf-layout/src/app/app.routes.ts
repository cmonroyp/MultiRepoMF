import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    title: 'App - Layout',
    component: LayoutComponent,
    loadChildren: () =>
      import('./layout/layout.routes').then((l) => l.LayoutRoutes),
  },

  //   {
  //     path: '',
  //     redirectTo: 'dashboard',
  //     pathMatch: 'full',
  //     loadComponent: () =>
  //       import('../app/layout/layout.component').then((a) => a.LayoutComponent),
  //   },

  //   {
  //     path: 'dashboard',
  //     component: LayoutComponent,
  //     children: [
  //       {
  //         path: 'about',
  //         title: 'App - About',
  //         loadComponent: () =>
  //           import('../app/layout/pages').then((a) => a.AboutComponent),
  //       },
  //     ],
  //   },
];
