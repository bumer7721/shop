import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseEnterBackround]'
})
export class MouseEnterBackroundDirective {

  @HostBinding('style.backgroundColor')
  backgroundColor: string;

  constructor( ) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = 'lightblue';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = '';
  }

}
