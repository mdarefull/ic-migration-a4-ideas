import { Component } from '@angular/core';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
})
export class ConsumerComponent {

  baseEvent = 'No events have been fired yet';
  extendedEvent = 'No events have been fired yet';
  inlineExtendedEvent = 'No events have been fired yet';

  handleBase(event: string) {
    this.baseEvent = event;
  }
  handleExtended(event: string) {
    this.extendedEvent = event;
  }

}
