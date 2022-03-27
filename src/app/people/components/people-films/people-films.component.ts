import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-people-films',
  templateUrl: './people-films.component.html',
  styleUrls: ['./people-films.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleFilmsComponent implements OnInit {

  films$: Observable<Array<any>>;

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.films$ = this.filmService.getFilms();
  }
}
