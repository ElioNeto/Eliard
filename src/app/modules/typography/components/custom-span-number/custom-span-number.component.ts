import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-span-number',
  templateUrl: './custom-span-number.component.html',
  styleUrls: ['./custom-span-number.component.css'],
})
export class CustomSpanNumberComponent implements OnInit {
  @Input() content = '';
  constructor() {}

  ngOnInit(): void {}
}
