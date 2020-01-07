import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import {
  FormatMoneyDirective,
  OnlyObjectNameDirective,
  OnlyCharactersDirective,
  OnlyDigitsDirective,
  OnlyAlphanumericDirective,
  OnlyOrganizationNameDirective,
  OnlyAddressDirective
} from './directives';

import {
  SliderComponent
 } from './components';

const COMPONENTS = [
  SliderComponent
];

const DIRECTIVES = [
  FormatMoneyDirective,
  OnlyAlphanumericDirective,
  OnlyCharactersDirective,
  OnlyDigitsDirective,
  OnlyObjectNameDirective,
  OnlyOrganizationNameDirective,
  OnlyAddressDirective
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
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...UTILS
  ],
  entryComponents: [
    ...UTILS
  ],
  providers: []
})
export class SharedModule { }
