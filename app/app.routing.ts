/**
 * Created by Mateusz on 2016-08-14.
 */
import {Routes, RouterModule} from '@angular/router';

import {SearchComponent} from 'app/search/search.component';
import {NotComponent} from "app/not.component";
import {AboutComponent} from "app/about.component";

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
    }
];
export const routing = RouterModule.forRoot(appRoutes);
