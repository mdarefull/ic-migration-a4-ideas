import { Component } from '@angular/core';

import { BaseComponent } from './../commons-v2/base.component';
import { ConsumerV2LogicExtended } from './consumer-v2.logicExtended';

@Component({
  selector: 'app-consumer-v2',
  templateUrl: './consumer-v2.component.html',
})
export class ConsumerV2Component extends BaseComponent<ConsumerV2LogicExtended> {
  get attributeBase(): string {
    return this.componentLogic.attributeBase;
  }
  set attributeBase(value: string) {
    this.componentLogic.attributeBase = value;
  }

  constructor() {
    super();

    this.componentLogic = new ConsumerV2LogicExtended();
  }
}
