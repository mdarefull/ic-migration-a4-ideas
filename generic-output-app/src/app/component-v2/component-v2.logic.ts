import { EventEmitter } from '@angular/core';

export class ComponentV2Logic {
  genericOutput: EventEmitter<any>;
  times = 0;

  eventBase = new EventEmitter<string>();
  fireEventBase() {
    this.times++;
    this.eventBase.emit(`event base fired. ${this.times} events fired.`);
  }
}
