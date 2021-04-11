import { ThrowStmt } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { People } from "../models/people";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class PeopleService{

  public people: People
    public peoples: People[]
      constructor(private httpClient: HttpClient) {

      }

        public getPeople(): Observable<People[]> {       
            const response$ = this.httpClient.get("https://swapi.py4e.com/api/people")

            const peoples$: Observable<People[]> = response$.pipe(
              map((response: any) => {
                this.peoples = response.results.map((jsonPeople: any) => People.fromJson(jsonPeople))
                return this.peoples
              })
            )

            return peoples$

        }



      public getPeopleById(id: number): Observable<People> {
        const response$ = this.httpClient.get("https://swapi.py4e.com/api/people/"+id)
      
        const people$: Observable<People> = response$.pipe(
          map((jsonPeople: any) => {
            const p = People.fromJson(jsonPeople)
            return p
          })
        )
          return people$
      }

  }
