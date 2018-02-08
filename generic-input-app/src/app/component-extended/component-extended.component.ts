import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-extended',
  templateUrl: './component-extended.component.html',
})
export class ComponentExtendedComponent {

  @Input()
  attributeBase: string;

  @Input()
  attributeExtended = 0;

  @Input()
  propertyExtended: string;

  @Input()
  methodExtended: boolean;

  @Input()
  ilineExpressionExtended = true;

  @Input()
  additionalInput = 'default value';
}
