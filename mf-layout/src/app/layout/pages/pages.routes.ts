import { Routes, Route } from '@angular/router';
import {
  AboutComponent,
  HelPComponent,
  HomeComponent,
  NotFoundComponent,
  ProfileComponent,
} from 'src/app/layout/pages';

export const PagesRoutes: Route[] = [
  {
    path: 'about',
    title: 'App - About',
    component: AboutComponent,
  },
  {
    path: 'help',
    title: 'App - Help',
    component: HelPComponent,
  },
  {
    path: 'home',
    title: 'App - Home',
    component: HomeComponent,
  },
  {
    path: 'not-found',
    title: 'App - NotFound',
    component: NotFoundComponent,
  },
  {
    path: 'profile',
    title: 'App - Profile',
    component: ProfileComponent,
  },
];
