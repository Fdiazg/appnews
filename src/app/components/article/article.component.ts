import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Share } from '@capacitor/share';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @Input() index: number;

  constructor(
    private iab: InAppBrowser,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {}

  openArticle() {
    // window.open(this.article.url, '_blank');
    const browser = this.iab.create(this.article.url);
    browser.show();
  }

  async openMenu() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'options',
      buttons: [
        {
          text: 'Share',
          icon: 'share-outline',
          handler: () => this.shareArticle(),
        },
        {
          text: 'Favorites',
          icon: 'heart-outline',
          handler: () => this.onToggleFavorite(),
        },
        {
          text: 'Cancel',
          icon: 'close-outline',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  async shareArticle() {
    // console.log('share article');
    await Share.share({
      title: this.article.title,
      text: this.article.source.name,
      url: this.article.url
    });
  }

  onToggleFavorite() {
    console.log('share article');
  }
}
