import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './layout/home/home-layout.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];
