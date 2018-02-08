import { ComponentV2Component } from './../component-v2/component-v2.component';
import { ComponentOnInitEvent } from './../commons-v2/componentOnInitEvent';
import { ConsumerV2Logic } from './consumer-v2.logic';

export class ConsumerV2LogicExtended extends ConsumerV2Logic {
  extendedEvent = 'No events have been fired yet';
  inlineExtendedEvent = 'No events have been fired yet';

  handleExtended(event: string) {
    this.extendedEvent = event;
  }

  initializeComponentV2(event: ComponentOnInitEvent) {
    const logic = (<ComponentV2Component>event.component).componentLogic;
    logic.eventExtended.subscribe(this.handleExtended);
    logic.inlineEventExtended.subscribe(e => this.inlineExtendedEvent = e);
  }
}
