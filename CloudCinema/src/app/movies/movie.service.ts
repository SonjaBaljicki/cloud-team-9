import {Injectable} from '@angular/core';
import {MovieInfo, RatingInfo, WatchInfo} from "./models/models.module";
import {SubscriptionInfo} from "./models/models.module";
import {catchError, map, Observable, of} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {environment} from "../../env/env";

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<MovieInfo[]> {
    const url = environment.apiHost + 'movies_info';
    return this.httpClient.get<any[]>(url);
  }

  getMovieInfo(id: string,timestamp:number): Observable<MovieInfo>  {
    const url = environment.apiHost + 'movie_info';
    let params = new HttpParams();
    params = params.append('movie_id', id);
    params = params.append('timestamp', timestamp);

    return this.httpClient.get<MovieInfo>(url, { params });
  }
  getMovie(id: string): Observable<HttpResponse<any>>  {
    const url = environment.apiHost + 'movies/download/'+id;
    return this.httpClient.get<any>(url, {responseType: 'blob' as 'json', observe: 'response' });
  }

  subscribeSNS(subscription: SubscriptionInfo): Observable<HttpResponse<any>>  {
    const url = environment.apiHost + 'subscribe';
    return this.httpClient.post<any>(url, subscription);
  }

  updateWatchHistory(info: WatchInfo): Observable<HttpResponse<any>>  {
    const url = environment.apiHost + 'update_watch_history';
    return this.httpClient.post<any>(url, info);
  }

  rateMovie(info: RatingInfo): Observable<HttpResponse<any>>  {
    const url = environment.apiHost + 'rate';
    return this.httpClient.post<any>(url, info);
  }

  editMovie(movieInfo: MovieInfo): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,DELETE'
    });
    const url = environment.apiHost + 'movie_info';
    return this.httpClient.put<any>(url,  movieInfo, {headers})
  }

  deleteMovie(id: string, timestamp: number) {
    const url = environment.apiHost + 'movies';
    let params = new HttpParams();
    params = params.append('movie_id', id);
    params = params.append('timestamp', timestamp);
    return this.httpClient.delete<any>(url, {params});
  }
}
