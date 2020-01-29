import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/product/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Array<ProductModel>;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    console.log('Cart component call OnInit()');
    this.products = this.cartService.getProducts();
  }

  isCartEmpty(): boolean {
    return this.cartService.isCartEmpty();
  }

  addRandomProduct(): void {
    console.log('Random product will be added.');
    this.cartService.addProduct();
    this.products = this.cartService.getProducts();
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
