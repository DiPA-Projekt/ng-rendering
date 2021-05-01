import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counter = 0;
  getClass(identifier: string) {
    this.counter++;
    console.log(`${identifier} called getClass() (${this.counter})`);
    return 'css-class';
  }
}
