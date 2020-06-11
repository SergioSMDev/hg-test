import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './components/news/news.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AuthGuard} from './shared/auth.guard';
import {NewsResolver} from './shared/news.resolver';

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)}, 
  {path: 'news', component: NewsComponent, canActivate: [AuthGuard], resolve: {news: NewsResolver}},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
