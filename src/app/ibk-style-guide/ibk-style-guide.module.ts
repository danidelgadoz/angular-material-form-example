import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
 IbkInputDirective,
 SelectDirective
} from './directives';

const COMPONENTS = [];

const DIRECTIVES = [
  IbkInputDirective,
  SelectDirective
];

const UTILS = [];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...UTILS
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...UTILS
  ],
  entryComponents: [
    ...UTILS
  ],
  providers: []
})
export class IbkStyleGuideModule { }
