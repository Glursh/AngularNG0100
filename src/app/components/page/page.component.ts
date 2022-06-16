import { Component, Input } from '@angular/core';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent {
  @Input() context?: { value: string };
  theTitle?: string;
  constructor() {}
  changeResult(title: string): void {
    // setTimeout(() => {
    this.theTitle = title;
    // }, 100);
  }
}
