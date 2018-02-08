import { ComponentV2GenericInputParameterConsumerV2 } from './consumer-v2.componentV2.genericInputParameter';
import { ConsumerV2Logic } from './consumer-v2.logic';

export class ConsumerV2LogicExtended extends ConsumerV2Logic {
  attributeExtended = 4;

  private _propertyExtended: string;
  get propertyExtended(): string {
    return this._propertyExtended;
  }
  set propertyExtended(value: string) {
    this._propertyExtended = value;
  }

  readonly componentV2GenericInputParameter: ComponentV2GenericInputParameterConsumerV2;
  constructor() {
    super();

    this.componentV2GenericInputParameter = new ComponentV2GenericInputParameterConsumerV2(this);
  }

  methodExtended(): boolean {
    return this.attributeBase === this.attributeExtended.toString();
  }
}


