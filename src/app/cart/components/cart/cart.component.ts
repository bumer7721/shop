import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { ProductModel } from 'src/app/product/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck {

  products: Array<ProductModel>;
  totalCount: number;
  totalPrice: number;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    console.log('Cart component call OnInit()');
    this.products = this.cartService.getProducts();
    this.totalCount = this.cartService.getTotalCountOfProducts();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  ngDoCheck(): void {
    console.log('Cart component call DoCheck()');
    this.totalCount = this.cartService.getTotalCountOfProducts();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  isCartEmpty(): boolean {
    return this.cartService.isCartEmpty();
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }
}
