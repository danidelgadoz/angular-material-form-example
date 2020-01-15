import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from 'src/app/shared/shared.module';
import { AppComponent } from './app.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { IonicFormExampleComponent } from './ionic-form-example/ionic-form-example.component';

@NgModule({
  declarations: [
    AppComponent,
    FormExampleComponent,
    IonicFormExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
