import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { ProductModel } from 'src/app/product/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    console.log('Cart component call OnInit()');
  }

  get products(): Array<ProductModel> {
    return this.cartService.getProducts();
  }

  get totalCount(): number {
    return this.cartService.getTotalCountOfProducts();
  }

  get totalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  isCartEmpty(): boolean {
    return this.cartService.isCartEmpty();
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }
}
