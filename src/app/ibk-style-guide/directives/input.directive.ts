import { Directive, HostListener, ElementRef, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[ibkInput]'
})
export class OnlyDigitsDirective implements AfterViewChecked {

  constructor(private el: ElementRef) {
  }

  ngAfterViewChecked() {
    this.updateErrorState();
  }

  private updateErrorState() {
    const inputClassList = [...this.el.nativeElement.classList];

    if (inputClassList.includes('ng-touched') && inputClassList.includes('ng-invalid')) {
      this.el.nativeElement.parentNode.parentNode.classList.add('form-field-error');
    } else {
      this.el.nativeElement.parentNode.parentNode.classList.remove('form-field-error');
    }
  }

}
