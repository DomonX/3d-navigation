import { filter, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'cube-menu',
  templateUrl: './cube-menu.component.html',
  styleUrls: ['./cube-menu.component.scss']
})
export class CubeMenuComponent {

  public rotation = {
    x: 0,
    y: 0,
    z: 0,
  };

  public x = 0;
  public y = 0;
  public z = 0;

  public currentXAxis = 0;
  public currentYAxis = 0;

  public xMatrix = ['x', 'z', '-x', '-z'];

  public yMatrix = ['y', 'z'];

  public transformStyle = '';
  public scaleStyle = '';

  public scale = 0.5;

  constructor() {
    fromEvent<KeyboardEvent>(document, 'keydown').pipe(filter(i => i.key === 'Escape')).subscribe(i => {
      this.scale = 0.5;
      this.buildStyle();
    })
    fromEvent<KeyboardEvent>(document, 'keydown')
      .pipe(filter(() => this.scale === 0.5), map((i) => i.key))
      .subscribe((i) => {
        if (i === 'd') {
          this.goRight();
        }
        if (i === 'a') {
          this.goLeft();
        }

        if (i === 'w') {
          this.goUp();
        }

        if (i === 's') {
          this.goDown();
        }
        if(i === 'Escape') {
          this.scale = 0.5;
        }
        this.x = this.getAbsoluteCoordinate(this.rotation.x);
        this.y = this.getAbsoluteCoordinate(this.rotation.y);
        this.z = this.getAbsoluteCoordinate(this.rotation.z);
        this.buildStyle();
      });
  }

  private goRight(): void {
    this.rotation.y--;
  }

  private goLeft(): void {
    this.rotation.y++;
  }

  private goUp(): void {
    this.rotation.x--;
  }

  private goDown(): void {
    this.rotation.x++;
  }

  public clickedFace(): void {
    this.scale = 1.0;
    this.buildStyle();
  }

  private getAbsoluteCoordinate(coord: number): number {
    return coord < 0 ? coord - 4 * Math.floor(coord / 4) : coord % 4;
  }

  private buildStyle(): void {
    this.transformStyle = `transform: rotateX(${
      90 * this.rotation.x
    }deg) rotateY(${90 * this.rotation.y}deg) rotateZ(${
      90 * this.rotation.z
    }deg);`;
    this.scaleStyle = `transform: scale3d(${this.scale}, ${this.scale}, ${this.scale})`;
  }
}
