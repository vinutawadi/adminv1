import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SideNavbarComponent } from './layout/side-navbar/side-navbar.component';

const appRoutes: Routes = [

    {
    path: '', component:SideNavbarComponent ,
}
]
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);