import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { ConsumerV2Component } from './consumer-v2/consumer-v2.component';
import { ComponentBaseComponent } from './component-base/component-base.component';
import { ComponentExtendedComponent } from './component-extended/component-extended.component';
import { ComponentV2Component } from './component-v2/component-v2.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsumerComponent,
    ConsumerV2Component,
    ComponentBaseComponent,
    ComponentExtendedComponent,
    ComponentV2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
