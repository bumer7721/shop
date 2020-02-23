import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseEnterBackroundDirective } from './mouse-enter-backround.directive';



@NgModule({
  declarations: [MouseEnterBackroundDirective],
  imports: [
    CommonModule
  ],
  exports: [
    MouseEnterBackroundDirective
  ]
})
export class SharedModule { }
