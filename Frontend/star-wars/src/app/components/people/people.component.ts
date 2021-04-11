import { Component, Input, OnInit } from '@angular/core';
import { People } from 'src/app/models/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  @Input() people: People;


  constructor() { }

  ngOnInit(): void {
  }

   
}