import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlreadyWatchedComponent } from '../app/already-watched/already-watched.component';
import { MyWatchListComponent } from '../app/my-watch-list/my-watch-list.component';

const routes: Routes = [
  { path: 'already-watched', component: AlreadyWatchedComponent },
  { path: 'watch-list', component: MyWatchListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
