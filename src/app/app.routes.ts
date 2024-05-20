import { Routes } from '@angular/router';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';
import { NotFoundComponent } from './domains/products/pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path:'',
        component: LayoutComponent,
        children:[
            {
                path:'',
                loadComponent: () => import('./domains/products/pages/home/home.component')
            },
            {
                path:'projects',
                loadComponent: () => import('./domains/products/pages/most-projects/most-projects.component')
            }
        ]
    },
    {
        path:'**',
        component:NotFoundComponent
    }
];
