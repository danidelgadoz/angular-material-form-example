import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ionic-form-example',
  templateUrl: './ionic-form-example.component.html',
  styleUrls: ['./ionic-form-example.component.scss']
})
export class IonicFormExampleComponent implements AfterViewInit {
  @ViewChild('dniElemRef', { static: false }) documentNumberElm: any;

  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
  ) {
    this.form = this.initFormBuilder();
    this.form.patchValue({
      documentNumber: 12345678,
      email: 'dedd1993@gmail.com',
      password: '123456',
      role: 'admin',
      rememberMe: false,
    });
  }

  ngAfterViewInit() {
    setTimeout(() => this.documentNumberElm.setFocus() , 1000);
  }

  onSubmit() {
    console.log(this.form.value);
  }

  private initFormBuilder(): FormGroup {
    return new FormGroup({
      documentNumber: new FormControl({ value: null, disabled: false }, [ ]),
      email: new FormControl({ value: null, disabled: false }, [ Validators.required, Validators.email ]),
      password: new FormControl({ value: null, disabled: false }, [ Validators.required ]),
      role: new FormControl({ value: null, disabled: false }, [ Validators.required ]),
      rememberMe: new FormControl({ value: false, disabled: false }, [ ]),
    });
  }

}
