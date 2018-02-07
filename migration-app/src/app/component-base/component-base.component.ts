import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-base',
  templateUrl: './component-base.component.html',
})
export class ComponentBaseComponent {

  @Input()
  attributeBase: string;
}
