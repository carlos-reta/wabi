import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  filmsToSearch: Array<string>;

  constructor(private http: HttpClient) {}

  getFilms(): Observable<any[]> {
    return forkJoin(this.filmsToSearch.map(url => this.getFilmByUrl(url)));
  }

  getFilmByUrl(url: string) {
    return this.http.get(url);
  }
}
