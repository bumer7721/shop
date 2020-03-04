import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseEnterBackroundDirective } from './mouse-enter-backround.directive';
import { ClickBorderColorDirective } from './directives/click-border-color.directive';



@NgModule({
  declarations: [MouseEnterBackroundDirective, ClickBorderColorDirective],
  imports: [
    CommonModule
  ],
  exports: [
    MouseEnterBackroundDirective,
    ClickBorderColorDirective
  ]
})
export class SharedModule { }
