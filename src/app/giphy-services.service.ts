import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GiphyServicesService {

  constructor(private http: HttpClient) { }

  getGifs(){
    var url = `https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=30`;
    return this.http.get(url);
  }
  export class SearchServiceService {
    http
    searchGifUrl = `${environment.gifUrl}/search`;
    stickersUrl =  `${environment.stickerUrl}/search`;
    apiKey = `${environment.YOUR_API_KEY}`
    limit = 5
}
