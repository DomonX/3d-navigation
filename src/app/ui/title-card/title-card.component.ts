import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.scss'],
})
export class TitleCardComponent implements OnInit {
  @Input() title: string;
  @Input() contents: string;

  constructor() {}

  ngOnInit(): void {}
}
