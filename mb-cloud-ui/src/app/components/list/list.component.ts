import { Component, OnInit } from '@angular/core';
import { Card } from './card-model'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public cards = [
    new Card('test', 'test')
  ]
  constructor() { }

  ngOnInit(): void {
    this.seedCards();
  }

  public seedCards() {
    for (let a = 0; a<20; a++) {
      this.cards.push(new Card(`test nr. ${a}`,`test nr. ${a}`));
    }
  }

}
