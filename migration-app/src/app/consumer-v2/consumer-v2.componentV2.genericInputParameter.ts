import { ComponentV2GenericInputParameter } from '../component-v2/component-v2.genericInputParameter';
import { ConsumerV2LogicExtended } from './consumer-v2.logicExtended';

export class ComponentV2GenericInputParameterConsumerV2 extends ComponentV2GenericInputParameter {

  constructor(private readonly _componentLogic: ConsumerV2LogicExtended) {
    super();
  }

  get attributeExtended(): number {
    return this._componentLogic.attributeExtended;
  }
  get propertyExtended(): string {
    return this._componentLogic.propertyExtended;
  }
  get methodExtended(): boolean {
    return this._componentLogic.methodExtended();
  }
  get ilineExpressionExtended(): boolean {
    return this._componentLogic.attributeBase === this._componentLogic.propertyExtended;
  }
}
