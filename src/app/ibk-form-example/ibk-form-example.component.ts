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

  constructor() {
    this.form = this.initFormBuilder();
    this.form.patchValue({
      documentNumber: 12345678,
      email: 'dedd1993@gmail.com',
      // password: '123456',
      // role: 'MONITOR',
      rememberMe: false,
    });

    setTimeout(() => {
      // this.form.patchValue({
      //   role: 'ADMIN',
      // });
      // this.form.get('role').enable();
    }, 5000);

    // this.form.get('role').valueChanges.subscribe(value => {
    //   console.log('role suscribtion', value);
    // });
  }

  ngAfterViewInit() {
    setTimeout(() => this.documentNumberElm.nativeElement.focus() , 500);
  }

  onSubmit() {
    console.log(this.form.value);
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
