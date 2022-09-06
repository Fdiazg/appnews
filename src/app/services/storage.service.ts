import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;
  private _localArticles: Article[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  get getLocalArticles(){
    // eslint-disable-next-line no-underscore-dangle
    return [...this._localArticles];
  }



  async init() {
    const storage = await this.storage.create();
    // eslint-disable-next-line no-underscore-dangle
    this._storage = storage;
    await this.loadFavorites();

  }

  async saveOrRemoveArticle(article: Article) {
    // eslint-disable-next-line no-underscore-dangle
    const exist = this._localArticles.find(localArticle => localArticle.title === article.title);

    if (exist) {
      console.log('aca');

      // eslint-disable-next-line no-underscore-dangle
      this._localArticles = this._localArticles.filter(localArticle => localArticle.title !== article.title);
    } else {
      // eslint-disable-next-line no-underscore-dangle
      this._localArticles = [article, ...this._localArticles];
    }
    // eslint-disable-next-line no-underscore-dangle
    this._storage.set('articles', this._localArticles);
  }

  async loadFavorites(){
    try {
      // eslint-disable-next-line no-underscore-dangle
      const articles = await this._storage.get('articles');
      // eslint-disable-next-line no-underscore-dangle
      this._localArticles = articles || [];
    } catch (error) {
      console.log(error);
    }
  }

  articlesInFavorites(article: Article){
    // eslint-disable-next-line no-underscore-dangle
    return !!this._localArticles.find(localArticle => localArticle.title === article.title);


  }

}
