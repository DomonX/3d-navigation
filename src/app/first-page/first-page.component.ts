import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent implements OnInit {
  public images: string[];

  constructor() {
    this.images = [
      'https://networks.imdea.org/wp-content/uploads/2021/09/media-file-code-900x500.png',
      'https://www.goodcore.co.uk/blog/wp-content/webp-express/webp-images/uploads/2019/08/coding-vs-programming-2.jpg.webp',
    ];
  }

  ngOnInit(): void {}
}
