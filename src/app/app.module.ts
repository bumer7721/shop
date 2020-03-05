import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './product/products.module';
import { OrderModule } from './order/order.module';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './layout/components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductsModule,
    OrderModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
