import { Route } from '@angular/router';
import { HomepageComponent } from '../libs/pages/homepage/homepage.component';

export const appRoutes: Route[] = [
    { path: '/home', component: HomepageComponent, title:'Art' },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    
];
