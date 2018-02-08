import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-extended',
  templateUrl: './component-extended.component.html',
})
export class ComponentExtendedComponent {
  times = 0;

  @Output()
  eventBase = new EventEmitter<string>();
  @Output()
  eventExtended = new EventEmitter<string>();
  @Output()
  inlineEventExtended = new EventEmitter<string>();
  @Output()
  additionalEventExtended = new EventEmitter<string>();

  fireEventBase() {
    this.times++;
    this.eventBase.emit(`event base fired. ${this.times} events fired.`);
  }
  fireEventExtended() {
    this.times++;
    this.eventExtended.emit(`event extended fired. ${this.times} events fired.`);
  }
  fireInlineEventExtended() {
    this.times++;
    this.inlineEventExtended.emit(`inline event extended fired. ${this.times} events fired.`);
  }
  fireAdditionalEventExtended() {
    this.times++;
    this.additionalEventExtended.emit(`additional event extended fired. ${this.times} events fired.`);
  }
}
