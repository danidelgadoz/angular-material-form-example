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
    this.form.patchValue({
      documentNumber: 12345678,
      email: 'dedd1993@gmail.com',
      // password: '123456',
      // role: 'admin',
      rememberMe: false,
    });

    setTimeout(() => {
      // this.form.patchValue({
      //   role: 'ADMIN',
      // });
      this.form.get('password').enable();
      this.form.get('role').enable();
    }, 5000);
  }

  ngAfterViewInit() {
    setTimeout(() => this.documentNumberElm.nativeElement.focus() , 1000);
  }

  onSubmit() {
    console.log(this.form.value);
  }

  private initFormBuilder(): FormGroup {
    return new FormGroup({
      documentNumber: new FormControl({ value: null, disabled: false }, [ ]),
      email: new FormControl({ value: null, disabled: false }, [ Validators.required, Validators.email ]),
      password: new FormControl({ value: null, disabled: true }, [ Validators.required ]),
      role: new FormControl({ value: null, disabled: true }, [ Validators.required ]),
      rememberMe: new FormControl({ value: false, disabled: false }, [ ]),
    });
  }
}
