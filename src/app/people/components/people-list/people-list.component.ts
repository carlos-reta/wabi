import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { FilmService } from '../../services/film.service';
import { PeopleService } from "../../services/people.service";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleListComponent {

  people$: Observable<any[]>;

  constructor(private router: Router, private peopleService: PeopleService, private filmService: FilmService) {

    this.initPeople();
  }

  initPeople() {
    this.people$ = this.peopleService.people$();
  }

  showPerson(films) {
    this.filmService.filmsToSearch = films;
    this.router.navigate(['/films']);
  }
}
