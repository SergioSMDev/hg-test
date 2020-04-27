import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {News} from './models';
import {Observable, of} from 'rxjs';
import {NewsService} from '../core/news.service';
import {Injectable} from '@angular/core';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsResolver implements Resolve<News[]>{
  constructor(private newsService: NewsService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<News[]> | Promise<News[]> | News[] {
    return of(this.newsService.newsList)
      .pipe(
        delay(1000)
      );
  }
}
