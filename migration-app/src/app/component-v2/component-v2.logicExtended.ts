import { ComponentV2GenericInputParameter } from './component-v2.genericInputParameter';
import { ComponentV2Logic } from './component-v2.logic';

export class ComponentV2LogicExtended extends ComponentV2Logic {
  get genericInputExtended(): ComponentV2GenericInputParameter {
    return <ComponentV2GenericInputParameter>this.genericInput;
  }
}
