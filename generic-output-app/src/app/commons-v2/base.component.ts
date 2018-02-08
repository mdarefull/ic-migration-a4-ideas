import { BaseComponentLogic } from './base.component.logic';
import { EventEmitter, OnInit, Output } from '@angular/core';

import { ComponentOnInitEvent } from './componentOnInitEvent';

// Simplified version of how onInit actually works
export class BaseComponent<TComponentLogic extends BaseComponentLogic> implements OnInit {

  componentLogic: TComponentLogic;

  /**
	 * Event that is triggered after component creation
	 */
  @Output()
  onInit = new EventEmitter<ComponentOnInitEvent>();

  ngOnInit(): void {
    const event = new ComponentOnInitEvent(this);
    this.onInit.emit(event);
  }
}
