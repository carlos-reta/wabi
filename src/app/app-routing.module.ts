import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleFilmsComponent } from './people/components/people-films/people-films.component';
import { PeopleListComponent } from './people/components/people-list/people-list.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleListComponent
  },
  {
    path: 'films',
    component: PeopleFilmsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
