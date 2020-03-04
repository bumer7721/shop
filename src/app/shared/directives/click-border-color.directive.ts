import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickBorderColor]'
})
export class ClickBorderColorDirective {
  private defaultBorderColor = 'border';

  @Input('appClickBorderColor') borderColor: string;

  constructor(private el: ElementRef,
              private render: Renderer2
  ) { }

  @HostListener('click')
  onClick() {
    console.log('ClickBorderColorDirective onClick');
    this.addBorder(this.borderColor);
  }

  private addBorder(color: string): void {
    this.render.addClass(this.el.nativeElement, this.defaultBorderColor);
    if (color) {
      this.render.addClass(this.el.nativeElement, color);
    }
  }
}
