import { EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { People } from "src/app/models/people";
import { PeopleService } from "src/app/services/people-service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })

  export class HomeComponent implements OnInit, OnDestroy {

@Input() people: People

@Output()
public clickPeopleItem: EventEmitter<People> = new EventEmitter<People>()

    public peoples: People[]
    private subscription: Subscription = new Subscription()

    

constructor(private peopleService: PeopleService){}

ngOnInit(): void{
  this.subscription.add(
    this.peopleService.getPeople().subscribe(
      (p) => {
        this.peoples = p,
        console.log ("peoples ", p)
      }
    )
  ) 
}

ngOnDestroy(): void {
this.subscription.unsubscribe()
  }

public onClickSummon(id: number): void {
  this.clickPeopleItem.emit(this.peoples[0])
  console.log(this.peoples[0])
  this.peopleService.getPeopleById(id)
}




}