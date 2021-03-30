import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'home',
                loadChildren: () =>
                    import('./home/home.module').then((m) => m.HomeModule),
            },
            {
                path: 'portal',
                loadChildren: () =>
                    import('./portal/portal.module').then((m) => m.PortalModule),
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            }
            
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule { }
