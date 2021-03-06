import { filter, map, takeUntil } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';

type MyType = Record<'x' | 'y' | 'z', number>;

@Component({
  selector: 'cube-menu',
  templateUrl: './cube-menu.component.html',
  styleUrls: ['./cube-menu.component.scss'],
})
export class CubeMenuComponent implements OnDestroy {
  public rotation: { [T in 'x' | 'y' | 'z']: number } = {
    x: 0,
    y: 0,
    z: 0,
  };

  public x: number = 0;

  public transformStyle = '';
  public scaleStyle = '';

  public scale = 0.5;

  private destroyed: Subject<void> = new Subject<void>();

  constructor() {
    fromEvent<KeyboardEvent>(document, 'keydown')
      .pipe(
        filter((i) => i.key === 'Escape'),
        takeUntil(this.destroyed)
      )
      .subscribe(() => {
        this.scale = 0.5;
        this.buildStyle();
      });

    const key$ = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      filter(() => this.scale === 0.5),
      map((i) => i.key),
      takeUntil(this.destroyed)
    );

    key$
      .pipe(filter((i) => i === 'd' || i === 'ArrowRight'))
      .subscribe(() => this.goRight());
    key$
      .pipe(filter((i) => i === 'a' || i === 'ArrowLeft'))
      .subscribe(() => this.goLeft());
    key$
      .pipe(filter((i) => i === 'w' || i === 'ArrowUp'))
      .subscribe(() => this.goUp());
    key$
      .pipe(filter((i) => i === 's' || i === 'ArrowDown'))
      .subscribe(() => this.goDown());
    key$.pipe(filter((i) => i === 'Enter')).subscribe(() => this.clickedFace());
  }

  public goRight(): void {
    if (this.x === 1 || this.x === 3) {
      return;
    }
    this.rotation.y--;
    this.buildStyle();
  }

  public goLeft(): void {
    if (this.x === 1 || this.x === 3) {
      return;
    }
    this.rotation.y++;
    this.buildStyle();
  }

  public goUp(): void {
    if (this.x === 3) {
      return;
    }
    this.rotation.x--;
    this.x = this.getAbsoluteCoordinate(this.rotation.x);
    this.buildStyle();
  }

  public goDown(): void {
    if (this.x === 1) {
      return;
    }
    this.rotation.x++;
    this.x = this.getAbsoluteCoordinate(this.rotation.x);
    this.buildStyle();
  }

  public clickedFace(): void {
    this.scale = 1.0;
    this.buildStyle();
  }

  public ngOnDestroy(): void {
    this.destroyed.next();
  }

  private getAbsoluteCoordinate(coord: number): number {
    return coord < 0 ? coord - 4 * Math.floor(coord / 4) : coord % 4;
  }

  private buildStyle(): void {
    if (this.x === 1 || this.x === 3) {
      this.rotation.y = 0;
    }
    this.transformStyle = `transform: rotateX(${
      90 * this.rotation.x
    }deg) rotateY(${90 * this.rotation.y}deg) rotateZ(${
      90 * this.rotation.z
    }deg);`;
    this.scaleStyle = `transform: scale3d(${this.scale}, ${this.scale}, ${this.scale})`;
  }
}
