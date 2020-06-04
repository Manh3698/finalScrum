import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieRankComponent} from './movie-rank/movie-rank.component'
import { PostComponent } from './post/post.component';
import { AuthenComponent } from './authen/authen.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {path : 'rank',component: MovieRankComponent },
  {path : 'addPost', component: PostComponent},
  {path : 'login',component: AuthenComponent},
  {path : 'detail/',component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
