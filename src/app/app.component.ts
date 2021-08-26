import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .blueColor {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  buttonClicking = 'Secret Password = hello';
  variable = false;
  clicks = [];
  timesClicked = 0;

  constructor() {}

  onClickButton() {
    this.variable = !this.variable;
    this.timesClicked = this.clicks.push(this.clicks.length + 1);
    this.buttonClicking = 'Secret Password = tuna';
  }
}
