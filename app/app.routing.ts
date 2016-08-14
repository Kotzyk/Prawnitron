/**
 * Created by Mateusz on 2016-08-14.
 */
import {Routes, RouterModule} from '@angular/router';

import {PrawnitronComponent} from './prawnitron.component';
import {NotComponent} from "./not.component";
import {SearchFormComponent} from "./search-form.component";
import {AboutComponent} from "./about.component";

const appRoutes: Routes = [
    {
        path: 'prawnitron',
        component: PrawnitronComponent
    },
    {
        path: '404',
        component: NotComponent
    },
    {
        path: 'search',
        component: SearchFormComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];
export const routing = RouterModule.forRoot(appRoutes);
