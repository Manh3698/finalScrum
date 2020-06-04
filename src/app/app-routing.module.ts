import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieRankComponent} from './movie-rank/movie-rank.component'
import { PostComponent } from './post/post.component';


const routes: Routes = [
  {path : 'rank',component: MovieRankComponent },
  {path : 'addPost', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
