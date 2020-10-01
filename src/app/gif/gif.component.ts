import { Component, OnInit } from '@angular/core';
import { GiphyServicesService } from '../giphy-services.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {
  gifs : any[] = [];

  constructor(private giphyService: GiphyServicesService) { }

  ngOnInit(): void {
    this.giphyService.getGifs()
    .subscribe((response: any) => {
      console.log('Data', response)
     this.gifs = response.data;
    });
  }

}
