import { Route } from '@angular/router';
import { WorksComponent } from '../libs/pages/works/works.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: WorksComponent,
    pathMatch: 'full',
    title: 'Works',
  },
  { path: 'works', component: WorksComponent, title: 'Works' },
];
