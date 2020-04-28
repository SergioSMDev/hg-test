import {Component, OnInit} from '@angular/core';
import {AppService} from '../../shared/app.service';
import {AuthService} from '../../shared/auth.service';
import {NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public appService: AppService, private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(
        (event) => {
          if (this.auth.isAuth() && event instanceof NavigationStart && event.url.includes('news')) {
            this.appService.newsChangeColor = true;
          }
        }
      );
  }

  changeColor(){
    if(this.auth.isAuth()){
      this.appService.newsChangeColor = true;
    }
  }
}
