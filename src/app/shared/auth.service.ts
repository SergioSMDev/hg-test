import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authorize(){
    localStorage.setItem('login', 'true');
  }

  unauthorize(){
    localStorage.setItem('login', 'false');
  }

  isAuth(): boolean{
    return localStorage.getItem('login') === 'true';
  }
}
