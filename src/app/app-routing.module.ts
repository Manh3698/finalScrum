import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieRankComponent} from './movie-rank/movie-rank.component'


const routes: Routes = [
  {path : 'rank',component: MovieRankComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
