import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeopleFilmsComponent } from './people-films.component';


describe('PeopleFilmsComponent', () => {
  let component: PeopleFilmsComponent;
  let fixture: ComponentFixture<PeopleFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
