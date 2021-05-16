import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'resize-observer';
  width: number = 0;
  height: number = 0;
  domRectReadOnly: DOMRectReadOnly | undefined;

  onResize(entry: ResizeObserverEntry[]) {
    this.width = entry[0].contentRect.width
    this.height = entry[0].contentRect.height;
    this.domRectReadOnly = entry[0].contentRect;
  }
}