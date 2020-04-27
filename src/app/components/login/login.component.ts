import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {Login} from '../../shared/models';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/auth.service';
import {AppService} from '../../shared/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginConfig: Login;
  isInvalidModal = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private appService: AppService) { }

  ngOnInit(): void {
    this.loginConfig = environment.loginConfig;
    this.loginForm = this.fb.group({
      userName: '',
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', Validators.required],
    });
  }

  samePassword(): boolean{
    return this.loginForm.controls.password.value === this.loginForm.controls.confirmPassword.value;
  }

  isValidLogin(): boolean{
    return this.loginForm.controls.userName.value === this.loginConfig.username && this.samePassword();
  }
  submit(){
    if (this.isValidLogin()){
      this.authService.authorize();
      this.router.navigate(['/profile']);
    } else {
      this.authService.unauthorize();
      this.isInvalidModal = true;
      this.appService.newsChangeColor = false;
      setTimeout(() => (this.isInvalidModal = false), 2000);
    }
  }
}
