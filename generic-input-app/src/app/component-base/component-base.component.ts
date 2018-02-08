import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-base',
  template: '',
})
export class ComponentBaseComponent {

  @Input()
  attributeBase: string;
}
