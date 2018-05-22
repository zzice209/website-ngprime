import {ModuleWithProviders, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {HomepageComponent} from './homepage/homepage.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {AuthguardGuard} from './authguard.guard';
import {BeeketingComponent} from './beeketing/beeketing.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'beeketing',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: '',
    // loadChildren: './homepage/homepage.module#HomepageModule'
    component: AppComponent
  },
  {
    path: 'admin',
    canActivate: [AuthguardGuard],
    component: AdminComponent
  },
  {
    path: 'sidebar',
    component: SidebarComponent
  },
  {
    path: 'nav',
    component: NavComponent
  },
  {
    path: 'beeketing',
    component: BeeketingComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: false});
