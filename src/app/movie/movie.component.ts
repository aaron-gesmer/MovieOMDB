import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  private api = 'https://www.omdbapi.com/?apikey=';
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
  private imdbRating: string;

  private alreadyWatchedList: string[] = [];
  private myWatchList: string[] = [];

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
        console.log(respParse);
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
          this.awards = respParse.Awards;
          this.imdbRating = respParse.Ratings[0].Value;
        }
      });
  }

  public addToWatchList() {
    if (!this.myWatchList.includes(this.title) && !this.alreadyWatchedList.includes(this.title)) {
      this.myWatchList.push(this.title);
    }
  }

  public addToAlreadyWatched() {
    if (!this.alreadyWatchedList.includes(this.title)) {
      this.alreadyWatchedList.push(this.title);
    }

    if (this.myWatchList.includes(this.title)) {
      this.removeFromWatchList(this.title);
    }
  }

  public seen(title: string) {
    this.removeFromWatchList(title);
    this.alreadyWatchedList.push(title);
  }

  public removeFromWatchList(title: string) {
    const index = this.myWatchList.indexOf(title);
    this.myWatchList.splice(index, 1);
  }

  public removeFromAlreadyWatched(title: string) {
    const index = this.alreadyWatchedList.indexOf(title);
    this.alreadyWatchedList.splice(index, 1);
  }

  public isValidSearch = () => this.validSearch;
  public isNotFound = () => this.notFound;
  public isNotProvided = () => this.notProvided;

  public getTitle = () => this.title;
  public getYear = () => this.year;
  public getDirector = () => this.director;
  public getImgUrl = () => this.imgUrl;
  public getPlot = () => this.plot;
  public getAwards = () => this.awards;
  public getRatings = () => this.imdbRating;
  public getAlreadyWatchedList = () => this.alreadyWatchedList;
  public getWatchList = () => this.myWatchList;
}
