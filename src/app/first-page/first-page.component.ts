import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent implements OnInit {
  public items: string[] = ['Menu1', 'Menu2', 'Menu3'];

  constructor() {}

  ngOnInit(): void {}
}
