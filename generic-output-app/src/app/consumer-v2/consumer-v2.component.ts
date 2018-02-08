import { BaseComponent } from './../commons-v2/base.component';
import { Component } from '@angular/core';
import { ConsumerV2LogicExtended } from './consumer-v2.logicExtended';

@Component({
  selector: 'app-consumer-v2',
  templateUrl: './consumer-v2.component.html',
})
export class ConsumerV2Component extends BaseComponent<ConsumerV2LogicExtended> {

  get baseEvent(): string {
    return this.componentLogic.baseEvent;
  }

  constructor() {
    super();

    this.componentLogic = new ConsumerV2LogicExtended();
  }
}
