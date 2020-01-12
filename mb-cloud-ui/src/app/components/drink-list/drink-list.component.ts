import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {

  constructor() { }

  public drinks: string[] = ['Paulaner Spezi', 'Mineralwasser','Bier','Cider','Bananensaft','Apfelschorle','Wein','Ale','Met'];
  ngOnInit() {
  }

}
