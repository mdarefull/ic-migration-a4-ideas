import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentBaseComponent } from './component-base/component-base.component';
import { ComponentExtendedComponent } from './component-extended/component-extended.component';
import { ComponentV2Component } from './component-v2/component-v2.component';
import { ConsumerV2Component } from './consumer-v2/consumer-v2.component';
import { ConsumerComponent } from './consumer/consumer.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsumerComponent,
    ComponentBaseComponent,
    ComponentExtendedComponent,
    ComponentV2Component,
    ConsumerV2Component
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
