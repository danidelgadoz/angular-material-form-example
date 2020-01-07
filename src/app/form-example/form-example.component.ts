import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements AfterViewInit {
  @ViewChild('dniElemRef', { static: false }) documentNumberElm: ElementRef;
  form: FormGroup;

  constructor() {
    this.form = this.initFormBuilder();
  }

  ngAfterViewInit() {
    setTimeout(() => this.documentNumberElm.nativeElement.focus() , 1000);
  }

  onSubmit() {
    console.log(this.form.value);
  }

  onReset() {
    this.form.reset();
  }

  private initFormBuilder(): FormGroup {
    return new FormGroup({
      sliderItem: new FormControl({ value: 50, disabled: false }, [ ]),
      documentNumber: new FormControl({ value: null, disabled: false }, [ ]),
      email: new FormControl({ value: null, disabled: false }, [ Validators.required, Validators.email ]),
      password: new FormControl({ value: null, disabled: false }, [ Validators.required ]),
      role: new FormControl({ value: null, disabled: false }, [ Validators.required ]),
      rememberMe: new FormControl({ value: false, disabled: false }, [ ]),
    });
  }
}
