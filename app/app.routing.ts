/**
 * Created by Mateusz on 2016-08-14.
 */
import {Routes, RouterModule} from '@angular/router';

import {SearchComponent} from './search/search.component';
import {NotComponent} from "./not.component";
import {AboutComponent} from "./about.component";

const appRoutes: Routes = [
    {
        path: 'app',
        component: SearchComponent
    },
    {
        path: '404',
        component: NotComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },{
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    }
];
export const routing = RouterModule.forRoot(appRoutes);
