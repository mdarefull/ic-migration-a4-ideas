import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  showVersion2 = true;
}

export class GenericObj {
  constructor(public a: string, public b: string) { }
}
