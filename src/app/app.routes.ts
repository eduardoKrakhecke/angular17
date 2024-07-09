import { Routes } from '@angular/router';

const DEFAULT_ROUTE = '/home';

export const routes: Routes = [
  { path: '', redirectTo: DEFAULT_ROUTE, pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: '**', redirectTo: DEFAULT_ROUTE, pathMatch:'full' },

];
