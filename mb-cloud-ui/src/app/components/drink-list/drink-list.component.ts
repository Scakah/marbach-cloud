import { Component, OnInit } from '@angular/core';
import { drink } from '../../models/drink';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {

  constructor() { }

  public drinks: drink[];
  
  ngOnInit() {
  }

}
