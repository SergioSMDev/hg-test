import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../core/news.service';

interface News {
    title: string;
    body: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsDB: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsDB = this.newsService.newsList;
  }

}
