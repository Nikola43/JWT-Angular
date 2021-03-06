﻿import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards';
import {HomeComponent} from "@/_components/home";
import {LoginComponent} from "@/_components/login";

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
