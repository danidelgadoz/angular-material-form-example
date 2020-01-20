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


  @HostListener('change', ['$event']) onchange(e) {
    this.doMagic('change', e);
  }

  @HostListener('keydown', ['$event']) onkeydown(e) {
    this.doMagic('keydown', e);
  }

  @HostListener('reset', ['$event']) onkeydownss(e) {
    this.doMagic('reset', e);
  }

  @HostListener('input', ['$event']) input(e) {
    this.doMagic('input', e);
  }
  @HostListener('durationchange', ['$event']) durationchange(e) {
    this.doMagic('durationchange', e);
  }
  @HostListener('ended', ['$event']) ended(e) {
    this.doMagic('ended', e);
  }
  @HostListener('error', ['$event']) error(e) {
    this.doMagic('error', e);
  }
  @HostListener('focus', ['$event']) focus(e) {
    this.doMagic('focus', e);
  }
  @HostListener('invalid', ['$event']) invalid(e) {
    this.doMagic('invalid', e);
  }
  @HostListener('ratechange', ['$event']) ratechange(e) {
    this.doMagic('ratechange', e);
  }

  @HostListener('*', ['$event']) submit(e) {
    this.doMagic('submit', e);
  }
  private doMagic(eventName: string, e) {
    // console.log(eventName, e);
  }


}
