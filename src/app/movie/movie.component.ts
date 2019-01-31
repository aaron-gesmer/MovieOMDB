import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  private api = 'http://www.omdbapi.com/?apikey=';
  private apiKey = 'c9e12726';

  private validSearch = false;
  private notFound = false;
  private notProvided = false;

  private title: string;
  private director: string;
  private plot: string;
  private year: string;
  private imgUrl: string;

  private awards: string;


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  searchMovie(title: string) {
    if (!title) {
      this.validSearch = false;
      this.notProvided = true;
      this.notFound = false;
    } else {
      this.getMovieInfo(`${this.api}${this.apiKey}&t=${title}&plot=full`);
    }
  }

  private getMovieInfo(url: string) {
    this.httpClient.get(url, { responseType: 'text' })
    .subscribe(response => {
      const respParse = JSON.parse(response);
      if (respParse.Error) {
        this.validSearch = false;
        this.notFound = true;
        this.notProvided = false;
      } else {
        this.validSearch = true;
        this.notFound = false;
        this.notProvided = false;

        this.title = respParse.Title;
        this.director = respParse.Director;
        this.plot = respParse.Plot;
        this.year = respParse.Year;
        this.imgUrl = respParse.Poster;
        console.log(respParse);
      }
    });
  }
}
