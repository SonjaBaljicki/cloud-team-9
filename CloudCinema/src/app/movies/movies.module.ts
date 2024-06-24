import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import {MatIconModule} from "@angular/material/icon";
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    MovieCardComponent,
    EditMovieComponent
  ],
  exports: [
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterLink
  ]
})
export class MoviesModule { }
