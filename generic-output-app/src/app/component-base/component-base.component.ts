import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-base',
  template: '',
})
export class ComponentBaseComponent {
  times = 0;

  @Output()
  eventBase = new EventEmitter<string>();

  fireEventBase() {
    this.times++;
    this.eventBase.emit(`event base fired. ${this.times} events fired.`);
  }
}
