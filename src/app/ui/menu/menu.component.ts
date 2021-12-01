import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bar-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() public items: string[];

  constructor() {}

  ngOnInit(): void {}
}
