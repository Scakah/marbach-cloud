import { Component, OnInit } from '@angular/core';
import { drink } from '../../models/drink';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {

  constructor() { }

  public drinks: drink[] = [
    { name: 'Cola' , price: 1.10},
    { name: 'Spezi', price: 0.90},
    { name: 'Wasser', price: 0.25},
    { name: 'Karamalz', price: 0.60},
    { name: 'Bier', price: 0.80},
    { name: 'Porter', price: 0.80},
    { name: 'Tequila', price: 0.70},
    { name: 'Bunderberg', price: 1.50},
    { name: 'Schwip Schwap', price: 0.80},
    { name: 'Energy', price: 0.35},
    { name: 'Bulmers', price: 2.50},
    { name: 'Test', price: 10000}
  ];

  ngOnInit() {
  }

}

