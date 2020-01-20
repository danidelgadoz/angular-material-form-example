import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { IbkStyleGuideModule } from '../ibk-style-guide/ibk-style-guide.module';

import {
  FormatMoneyDirective,
  OnlyObjectNameDirective,
  OnlyCharactersDirective,
  OnlyDigitsDirective,
  OnlyAlphanumericDirective,
  OnlyOrganizationNameDirective,
  OnlyAddressDirective
} from './directives';

const COMPONENTS = [];

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
    IbkStyleGuideModule,
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
