import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    // ProductComponent, // этот компонент используется только в компонентах текущего модуля, его не надо делать публичным
    ProductListComponent
  ]
})
export class ProductsModule { }
