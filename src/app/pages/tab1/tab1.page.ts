import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Article, NewsResponse } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  articles: Article[] = [];
  page = 1;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getTopHeadLines(this.page, 'business').subscribe(resp => {
      console.log(resp);
      this.articles = resp.articles;
    });
  }
  loadData(event: any) {
    console.log(event);
    this.page += 1;
    this.newsService.getTopHeadLines(this.page, 'business').subscribe(resp => {

      if (resp.articles.length === 0) {
        this.infiniteScroll.disabled = true;
        return;
      }

      this.articles = [...this.articles, ...resp.articles];
      this.infiniteScroll.complete();
    });
  }
}
