import {Component, OnInit} from '@angular/core';
import {AppService} from '../../shared/app.service';
import {AuthService} from '../../shared/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public appService: AppService, private auth: AuthService, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  changeColor(){
    if(this.auth.isAuth()){
      this.appService.newsChangeColor = true;
    }
  }
}
