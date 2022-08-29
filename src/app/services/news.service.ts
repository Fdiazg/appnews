import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsResponse } from '../interfaces';

const apiKey = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopHeadLines(){
    return this.http.get<NewsResponse>
    (`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`);
  }

}
