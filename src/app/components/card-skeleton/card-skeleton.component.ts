import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-skeleton',
  templateUrl: './card-skeleton.component.html',
  styleUrls: ['./card-skeleton.component.css'],
  animations: [
    trigger('skeleton', [
      state('hidden', style({ opacity: 0.3 })),
      state('visible', style({ opacity: 1 })),
      transition('hidden <=> visible', animate('1s ease-in-out')),
    ]),
  ],
})
export class CardSkeletonComponent implements OnInit {
  public cards: any[] = [
    {
      state: 'hidden',
    },
    {
      state: 'hidden',
    },
    {
      state: 'hidden',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.toggleState();
  }

  public toggleState(): void {
    this.cards.map((card) => {
      if (card.state === 'hidden') {
        card.state = 'visible';
      } else {
        card.state = 'hidden';
      }
    });

    setTimeout(() => this.toggleState(), 850);
  }
}
