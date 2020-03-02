import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMouseEnterBackround]'
})
export class MouseEnterBackroundDirective {

  private mouseEnterClasses = ' bg-info text-white';

  // tslint:disable-next-line: no-input-rename
  @Input('class')
  @HostBinding('class')
  hostClasses: string;

  constructor( ) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('Mouse enter!');
    this.hostClasses += this.mouseEnterClasses;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    console.log('Mouse leave!');
    this.hostClasses = this.hostClasses.replace(this.mouseEnterClasses, '');
  }

}
