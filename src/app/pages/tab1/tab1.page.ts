import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  articles: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getTopHeadLines().subscribe((resp: any)=> {
      console.log(resp.articles);
      this.articles = resp.articles;
    });
  }
}
