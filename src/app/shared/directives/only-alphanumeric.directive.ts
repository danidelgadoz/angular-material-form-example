import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appOnlyAlphanumeric]'
})
export class OnlyAlphanumericDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event']) onkeydown(e) {
    const charCode = (e.which) ? e.which : e.keyCode;

    if ((e.keyCode === 86 && (e.ctrlKey || e.metaKey))) {
      return;
    }

    if (
      charCode > 31
      && (charCode < 46 || charCode > 57)
      && (charCode < 65 || charCode > 90)
      && (charCode < 96 || charCode > 122)
      && charCode !== 37 && charCode !== 39
    ) {
      return false;
    }
    return true;
  }

}
