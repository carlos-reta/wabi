import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {

  constructor(private http: HttpClient) {}

  people$(): Observable<Person[]> {
    return this.http.get('https://swapi.dev/api/people').pipe(
      map((result: any) => result.results),
      mergeMap<any, Observable<any>>((result) => {
        return forkJoin(
          result.map((person) => {
            return this.http.get(person.homeworld).pipe(
              map((planet: any) => {
                return { ...person, homeWorld: planet.name };
              })
            );
          })
        );
      })
    );
  }
}
