import {Router, RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage.component';
import {LoginComponent} from '../login/login.component';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from '../home/home.component';

export const routes: Routes = [{
  path: 'home',
  component: HomepageComponent,
  children: [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
  ]
}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
