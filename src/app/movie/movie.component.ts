import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  public searchMovie = (title: string) => this.movieService.searchMovie(title);
  public addToWatchList = () => this.movieService.addToWatchList();
  public addToAlreadyWatched = () => this.movieService.addToAlreadyWatched();
  public seen = (title: string) => this.movieService.seen(title);
  public removeFromWatchList = (title: string) => this.movieService.removeFromWatchList(title);

  public isValidSearch = () => this.movieService.isValidSearch();
  public isNotFound = () => this.movieService.isNotFound();
  public isNotProvided = () => this.movieService.isNotProvided();

  public getTitle = () => this.movieService.getTitle();
  public getYear = () => this.movieService.getYear();
  public getDirector = () => this.movieService.getDirector();
  public getImgUrl = () => this.movieService.getImgUrl();
  public getPlot = () => this.movieService.getPlot();
  public getAwards = () => this.movieService.getAwards();
  public getBoxOffice = () => this.movieService.getBoxOffice();
  public getRuntime = () => this.movieService.getRuntime();
  public getImdbRating = () => this.movieService.getImdbRating();
  public getRottenTomatoesRating = () => this.movieService.getRottenTomatoesRating();
  public getMetacriticRating = () => this.movieService.getMetacriticRating();
  public getAlreadyWatchedList = () => this.movieService.getAlreadyWatchedList();
  public getWatchList = () => this.movieService.getWatchList();
}
