import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {News} from '../../shared/models';
import {AppService} from '../../shared/app.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  newsDB: News[];

  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit(): void {
    this.appService.newsChangeColor = true;
    this.sub = this.route.data.subscribe(data => {
      this.newsDB = data.news;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.appService.newsChangeColor = false;
  }

}
