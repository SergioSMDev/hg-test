import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {loginReducer} from './store/login.reducer';
import {CommonModule} from '@angular/common';

const loginRoutes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(loginRoutes),
    StoreModule.forFeature('login', loginReducer),
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}
