import { Component, Input } from '@angular/core';

import { BaseComponent } from './../commons-v2/base.component';
import { ComponentV2LogicExtended } from './component-v2.logicExtended';

@Component({
  selector: 'app-component-v2',
  templateUrl: './component-v2.component.html',
})
export class ComponentV2Component extends BaseComponent<ComponentV2LogicExtended> {

  @Input()
  set attributeBase(value: string) {
    this.componentLogic.attributeBase = value;
  }
  get attributeBase(): string {
    return this.componentLogic.attributeBase;
  }

  @Input()
  set genericInput(value: any) {
    this.componentLogic.genericInput = value;
  }
  get genericInput(): any {
    return this.componentLogic.genericInput;
  }

  constructor() {
    super();

    this.componentLogic = new ComponentV2LogicExtended();
  }
}
