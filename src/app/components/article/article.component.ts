import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @Input() index: number;

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {}

  openArticle() {
    // window.open(this.article.url, '_blank');
    const browser = this.iab.create(this.article.url);
    browser.show();
  }

}
