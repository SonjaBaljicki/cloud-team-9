import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./layout/home/home.component";
import {EditMovieComponent} from "./movies/edit-movie/edit-movie.component";
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { Platform } from '@angular/cdk/platform';
import { PlayerComponent } from './movies/player/player.component';
import {MovieSubscriptionsComponent} from "./movies/movie-subscriptions/movie-subscriptions.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:"home/movies/movieEdit/:id/:timestamp", component: EditMovieComponent},
  {path:"home",component:HomeComponent},
  {path:'login', component: LoginPageComponent},
  {path:'home/movies/subscription', component: MovieSubscriptionsComponent},
  {path:'play/:id', component: PlayerComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
