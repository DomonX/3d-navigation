import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'animation';

}
