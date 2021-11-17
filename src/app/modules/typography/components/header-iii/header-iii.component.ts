import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-iii',
  templateUrl: './header-iii.component.html',
  styleUrls: ['./header-iii.component.css'],
})
export class HeaderIiiComponent implements OnInit {
  @Input() content = '';

  constructor() {}

  ngOnInit(): void {}
}
