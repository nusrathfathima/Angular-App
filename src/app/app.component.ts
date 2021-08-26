import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [
    `
      .blueColor {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  onClick = false;
  buttonClicking = 'Secret Password = hello';
  variable = false;
  clicks = [];
  timesClicked = 0;

  constructor() {
    setTimeout(() => {
      this.onClick = true;
    }, 2000);
  }

  onClickButton() {
    this.variable = true;
    this.timesClicked += 1;
    this.clicks.push(this.buttonClicking);
    this.buttonClicking = 'Secret Password = tuna';
  }

  getColor() {
    return this.timesClicked >= 5 ? 'blue' : 'red';
  }
}
