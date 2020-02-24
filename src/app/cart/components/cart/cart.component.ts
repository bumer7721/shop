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
    return this.cartService.getCartProducts();
  }

  get totalCount(): number {
    return this.cartService.getTotalQuantity();
  }

  get totalPrice(): number {
    return this.cartService.getTotalSum();
  }

  isCartEmpty(): boolean {
    return this.cartService.isCartEmpty();
  }

  onRemoveProduct(product: ProductModel): void {
    this.cartService.removeProduct(product);
  }

  onAddQuantity(product: ProductModel): void {
    this.cartService.increaseQuantity(product);
  }

  onSubQuantity(product: ProductModel): void {
    this.cartService.decreaseQuantity(product);
  }

  onClearCart(): void {
    this.cartService.removeAllProducts();
  }
}
