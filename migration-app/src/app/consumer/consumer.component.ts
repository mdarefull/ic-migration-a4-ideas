import { Component } from '@angular/core';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
})
export class ConsumerComponent {

  attributeBase = 'Base';
  attributeExtended = 4;

  private _propertyExtended: string;
  get propertyExtended(): string {
    return this._propertyExtended;
  }
  set propertyExtended(value: string) {
    this._propertyExtended = value;
  }

  methodExtended(): boolean {
    return this.attributeBase === this.attributeExtended.toString();
  }
}

