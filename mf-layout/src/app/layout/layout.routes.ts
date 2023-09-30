import { Routes, Route } from '@angular/router';

export const LayoutRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    title: 'App - Pages',
    loadChildren: () =>
      import('./pages/pages.routes').then((p) => p.PagesRoutes),
  },

  //   {
  //     path: 'about',
  //     title: 'App - Pages',
  //     loadComponent: () =>
  //       import('./side/side.component').then((s) => s.SideComponent),
  //   },
];
