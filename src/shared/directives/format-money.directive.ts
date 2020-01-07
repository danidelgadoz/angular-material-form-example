import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFormatMoney]'
})
export class FormatMoneyDirective {

  constructor(private el: ElementRef) {}

  @HostListener('paste', ['$event']) blockPaste(e: any) {
    e.preventDefault();
  }
  @HostListener('input', ['$event']) oninput(event) {
    const value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = (value.indexOf('.') >= 0) ?
     (value.substr(0, value.indexOf('.')) + value.substr(value.indexOf('.'), 3)) : value;
  }

  @HostListener('keydown', ['$event']) onkeydown(e) {
    const value: string = this.el.nativeElement.value;

    if (value.indexOf('.') >= 0 && (e.keyCode === 110 || e.keyCode === 190)) {
      e.preventDefault();
    }

    if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      // (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+C
      (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
      // Allow: Ctrl+X
      (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return;
      }

      // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }





  }
}
