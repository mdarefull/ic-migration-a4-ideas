import { Component, EventEmitter, Output } from '@angular/core';

import { BaseComponent } from './../commons-v2/base.component';
import { ComponentV2LogicExtended } from './component-v2.logicExtended';

@Component({
  selector: 'app-component-v2',
  templateUrl: './component-v2.component.html',
})
export class ComponentV2Component extends BaseComponent<ComponentV2LogicExtended> {


  @Output()
  set eventBase(value: EventEmitter<string>) {
    if (this.componentLogic && this.componentLogic.eventBase) {
      this.componentLogic.eventBase = value;
    }
  }
  get eventBase(): EventEmitter<string> {
    return this.componentLogic.eventBase;
  }

  @Output()
  set genericOutput(value: EventEmitter<any>) {
    if (this.componentLogic && this.componentLogic.genericOutput) {
      this.componentLogic.genericOutput = value;
    }
  }
  get genericOutput(): EventEmitter<any> {
    return this.componentLogic.genericOutput;
  }

  constructor() {
    super();

    this.componentLogic = new ComponentV2LogicExtended();
  }
}
