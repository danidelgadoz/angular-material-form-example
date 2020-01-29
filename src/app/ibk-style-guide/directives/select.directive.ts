import { AfterViewInit, Directive, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { IbkInputDirective } from './input.directive';

@Directive({
  selector: '[ibkSelect]',
  providers: [
    {
       provide: NG_VALUE_ACCESSOR,
       useExisting: forwardRef(() => SelectDirective),
       multi: true
    }
  ]
})
export class SelectDirective extends IbkInputDirective implements ControlValueAccessor, AfterViewInit {

  /**
   * Holds the current value of the form-control
   */
  value;

  get ibkSelectElement() {
    return this.elRef.nativeElement;
  }

  /**
   * Invoked when the model has been changed
   */
  onChange = (_: any) => {};

  /**
   * Invoked when the model has been touched
   */
  onTouched = () => {};

  constructor(private elRef: ElementRef) {
    super(elRef);
  }

  ngAfterViewInit() {
    this.ibkSelectElement.addEventListener('selectionChange', event => {
      this.onChange(event.detail);
    });

    this.ibkSelectElement.addEventListener('openedChange', event => {
      const currentValue = this.ibkSelectElement.value;
      if (event.detail === false && (currentValue === null || currentValue === undefined)) {
        this.onTouched();
      }
    });
    this.ibkSelectElement.addEventListener('focusout', () => {
      const currentValue = this.ibkSelectElement.value;
      if ((currentValue === null || currentValue === undefined)) {
        this.onTouched();
      }
    });
  }

  ///////////////
  // OVERRIDES //
  ///////////////

  /**
   * Writes a new value to the element.
   * @param obj The new value for the element
   */
  writeValue(obj: number): void {
    this.ibkSelectElement.value = obj; // Writes a value to the IBK Native Custom element.
    this.value = obj;
  }

  /**
   * Registers a callback function that should be called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  /**
   * Registers a callback function that should be called when the control receives a blur event.
   * @param fn The callback function to register
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Function that is called by the forms API when the control status changes to or from 'DISABLED'.
   * Depending on the status, it enables or disables the appropriate DOM element.
   * @param isDisabled The disabled status to set on the element
   */
  setDisabledState(isDisabled: boolean): void {
    this.ibkSelectElement.disabled = isDisabled;
  }

}
