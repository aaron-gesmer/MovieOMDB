import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private api = 'https://www.omdbapi.com/?apikey=';
  private apiKey = 'c9e12726';

  private validSearch: boolean;
  private notFound: boolean;
  private notProvided: boolean;

  private title: string;
  private director: string;
  private plot: string;
  private year: string;
  private imgUrl: string;
  private awards: string;
  private boxOffice: string;
  private runtime: string;
  private imdbRating: string;
  private rottenTomatoesRating: string;
  private metacriticRating: string;

  private alreadyWatchedList: string[] = [];
  private myWatchList: string[] = [];

  constructor(private httpClient: HttpClient) { }

  public searchMovie(title: string) {
    if (!title) {
      this.validSearch = false;
      this.notProvided = true;
      this.notFound = false;
    } else {
      this.getMovieInfo(`${this.api}${this.apiKey}&t=${title}&plot=full`);
    }
  }

  private getMovieInfo(url: string): void {
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
          this.boxOffice = respParse.BoxOffice;
          this.runtime = respParse.Runtime;
          this.imdbRating = respParse.Ratings[0].Value;
          this.rottenTomatoesRating = respParse.Ratings[1] ? respParse.Ratings[1].Value : '--';
          this.metacriticRating = respParse.Ratings[2] ? respParse.Ratings[2].Value : '--';
          console.log('foo: ', this.rottenTomatoesRating);
          console.log('bar: ', this.metacriticRating);
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

  public isValidSearch = () => this.validSearch;
  public isNotFound = () => this.notFound;
  public isNotProvided = () => this.notProvided;

  public getTitle = () => this.title;
  public getYear = () => this.year;
  public getDirector = () => this.director;
  public getImgUrl = () => this.imgUrl;
  public getPlot = () => this.plot;
  public getAwards = () => this.awards;
  public getBoxOffice = () => this.boxOffice;
  public getRuntime = () => this.runtime;
  public getImdbRating = () => this.imdbRating;
  public getRottenTomatoesRating = () => this.rottenTomatoesRating;
  public getMetacriticRating = () => this.metacriticRating;
  public getAlreadyWatchedList = () => this.alreadyWatchedList;
  public getWatchList = () => this.myWatchList;
}
