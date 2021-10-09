import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('rightToLeft', [
      state(
        'created',
        style({
          opacity: 1,
        })
      ),
      transition('void => created', [
        style({
          opacity: 0,
          transform: 'translate(+100px, 0)',
        }),
        animate('500ms ease-in-out'),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  public state: string = 'created';
  public postsState: string = 'loading';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.postsState = 'created';
    }, 5000);
  }
}
