import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './movie.service';
import { NavigationComponent } from './navigation/navigation.component';
import { AlreadyWatchedComponent } from './already-watched/already-watched.component';
import { MyWatchListComponent } from './my-watch-list/my-watch-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NavigationComponent,
    AlreadyWatchedComponent,
    MyWatchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
