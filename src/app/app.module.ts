import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {HomepageComponent} from './homepage/homepage.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {UserService} from './user.service';
import {AuthguardGuard} from './authguard.guard';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {SidebarModule} from 'primeng/sidebar';
import {HomepageModule} from './homepage/homepage.module';
import {routing} from './app.routing';
import {HomeComponent} from './home/home.component';
import {AppService} from './app.service';
import {HttpClientModule} from '@angular/common/http';
import { BeeketingComponent } from './beeketing/beeketing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomepageComponent,
    SidebarComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    BeeketingComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    HttpClientModule,
    SidebarModule,
    HomepageModule,
  ],
  providers: [UserService, AuthguardGuard, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
