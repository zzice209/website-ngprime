import {NgModule} from '@angular/core';
import {routing} from './homepage.routing';
import {LoginComponent} from '../login/login.component';
import {HomepageComponent} from './homepage.component';

@NgModule({
  imports: [
    routing
  ],
  declarations: [],
  providers: [
    LoginComponent,
    HomepageComponent,
  ]
})
export class HomepageModule {
}
