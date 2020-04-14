import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseEnterBackroundDirective } from './mouse-enter-backround.directive';
import { ClickBorderColorDirective } from './directives/click-border-color.directive';
import { OrderByPipe } from './pipes/order-by.pipe';



@NgModule({
  declarations: [MouseEnterBackroundDirective, ClickBorderColorDirective, OrderByPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    MouseEnterBackroundDirective,
    ClickBorderColorDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
