import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "";

  onUpdateName(event: Event) {
    this.userName= (<HTMLInputElement>event.target).value;
  }

  onClicking() {
    this.userName = "";
  }
}
