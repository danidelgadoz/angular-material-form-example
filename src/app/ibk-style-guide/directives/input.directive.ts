import { Directive, ElementRef, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[ibkInput]'
})
export class IbkInputDirective implements AfterViewChecked {

  constructor(private el: ElementRef) {
  }

  ngAfterViewChecked() {
    this.updateErrorState();
  }

  get ibkFormField() {
    return this.el.nativeElement.parentNode.parentNode;
  }

  private updateErrorState() {
    const formControlClassList = [...this.el.nativeElement.classList];

    if (formControlClassList.includes('ng-touched') && formControlClassList.includes('ng-invalid')) {
      this.ibkFormField.classList.add('form-field-error');
    } else {
      this.ibkFormField.classList.remove('form-field-error');
    }

    if (this.ibkFormField.tagName === 'IBK-FORM-FIELD' && this.el.nativeElement.disabled === true) {
      this.ibkFormField.classList.add('form-field-disabled');
    } else {
      this.ibkFormField.classList.remove('form-field-disabled');
    }
  }

}
