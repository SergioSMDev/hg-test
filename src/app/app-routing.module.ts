import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {NewsComponent} from './components/news/news.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AuthGuard} from './shared/auth.guard';
import {NewsResolver} from './shared/news.resolver';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'news', component: NewsComponent, canActivate: [AuthGuard], resolve: {news: NewsResolver}},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
