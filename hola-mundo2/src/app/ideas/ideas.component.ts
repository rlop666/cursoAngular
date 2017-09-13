import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {
  public idea: string;
  public ideas;

  constructor() { }

  ngOnInit() {
    this.ideas = [];
  }

  anadirIdea() {
    this.ideas.push(this.idea);
  }
}
