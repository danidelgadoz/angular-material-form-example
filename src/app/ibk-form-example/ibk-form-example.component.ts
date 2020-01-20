import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ibk-form-example',
  templateUrl: './ibk-form-example.component.html',
  styleUrls: ['./ibk-form-example.component.scss']
})
export class IbkFormExampleComponent implements AfterViewInit {
  @ViewChild('dniElemRef', { static: false }) documentNumberElm: ElementRef;
  form: FormGroup;
  roles = [
    { label: 'Admin', value: 'admin' },
    { label: 'Monitor', value: 'monitor' },
    { label: 'Sales', value: 'sales' },
  ];
  currentRoleSelected = this.roles[2].value;

  constructor() {
    this.form = this.initFormBuilder();
    this.form.patchValue({
      documentNumber: 12345678,
      email: 'dedd1993@gmail.com',
      password: '123456',
      role: 'admin',
      rememberMe: false,
    });
  }

  roleChanged(value) {
    console.log('roleChanged...', value);
  }

  ngAfterViewInit() {
    setTimeout(() => this.documentNumberElm.nativeElement.focus() , 500);
  }

  onSubmit() {
    console.log(this.form.value);
    console.log(this.currentRoleSelected);

  }

  private initFormBuilder(): FormGroup {
    return new FormGroup({
      documentNumber: new FormControl({ value: null, disabled: false }, [ Validators.required ]),
      email: new FormControl({ value: null, disabled: false }, [ Validators.required, Validators.email ]),
      password: new FormControl({ value: null, disabled: false }, [ Validators.required ]),
      role: new FormControl({ value: null, disabled: false }, [ Validators.required ]),
      rememberMe: new FormControl({ value: false, disabled: false }, [ ]),
    });
  }
}
