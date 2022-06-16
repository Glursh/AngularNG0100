import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  context?: { value: string };
  setContext(): void {
    this.context = { value: '' + new Date() };
  }
}
