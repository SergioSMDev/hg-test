import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {Login} from '../../shared/models';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/auth.service';
import {AppService} from '../../shared/app.service';
import {select, Store} from '@ngrx/store';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import * as loginActions from './store/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  isInvalidModal = false;
  text: string;
  private destroy$ = new Subject<void>();
  private loginConfig: Login;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private appService: AppService,
              private store: Store<any>) {

    this.loginConfig = environment.loginConfig;
    this.loginForm = this.fb.group({
      userName: '',
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {

    this.store
      .pipe(
        select('login'),
        takeUntil(this.destroy$))
      .subscribe(
        data => {
          if (data) {
            this.loginForm.patchValue({...data.login});
          }
        },
        () => this.showModal('something wrong here')
      );
  }

  samePassword(): boolean{
    return this.loginForm.controls.password.value === this.loginForm.controls.confirmPassword.value;
  }

  isValidLogin(): boolean{
    return this.loginForm.controls.userName.value === this.loginConfig.username && this.samePassword();
  }

  submit(){
    if (this.isValidLogin()){
      this.store.dispatch(new loginActions.SaveLogin(this.loginForm.value));
      this.authService.authorize();
      this.router.navigate(['/profile']);
    } else {
      this.store.dispatch(new loginActions.SaveLogin(this.loginForm.value));
      this.authService.unauthorize();
      this.appService.newsChangeColor = false;
      this.showModal('Username or password is incorrect');
    }
  }

  clearData() {
    this.loginForm.reset();
    this.store.dispatch(new loginActions.ClearLogin());
  }

  showModal(text: string) {
    this.text = text;
    this.isInvalidModal = true;
    setTimeout(() => (this.isInvalidModal = false), 2000);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
