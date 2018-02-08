import { BaseComponent } from './base.component';
import { BaseComponentLogic } from './base.component.logic';

// Simplified ComponentOnInitEvent
export class ComponentOnInitEvent {

  component: BaseComponent<BaseComponentLogic>;

  constructor(component: BaseComponent<BaseComponentLogic>) {
    this.component = component;
  }
}
