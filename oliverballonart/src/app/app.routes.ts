import { Route } from '@angular/router';
import { WorksComponent } from '../libs/pages/works/works.component';
import { PrcssComponent } from 'src/libs/pages/prcss/prcss.component';
import { ContactComponent } from 'src/libs/pages/contact/contact.component';
import { InfoComponent } from 'src/libs/pages/info/info.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: WorksComponent,
    pathMatch: 'full',
    title: 'Works',
  },
  {
    path: 'works',
    component: WorksComponent,
    title: 'Works',
    children: [
      {
        path: ':uid',
        component: WorksComponent,
        title: '{{SET DYNAMIC TITLE}}',
      },
    ],
  },
  { path: 'prcess', component: PrcssComponent, title: 'Process' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'info', component: InfoComponent, title: 'Info' },
];
