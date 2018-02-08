import { EventEmitter } from '@angular/core';

import { ComponentV2Logic } from './component-v2.logic';

export class ComponentV2LogicExtended extends ComponentV2Logic {
  eventExtended = new EventEmitter<string>();
  inlineEventExtended = new EventEmitter<string>();
  additionalEventExtended = new EventEmitter<string>();

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
