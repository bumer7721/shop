import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/product/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: Array<ProductModel>;
  totalQuantity: number;
  totalSum: number;

  constructor() {
    this.cartProducts = new Array<ProductModel>();
  }

  getCartProducts(): Array<ProductModel> {
    return this.cartProducts;
  }

  getTotalQuantity(): number {
    return this.totalQuantity;
  }

  getTotalSum(): number {
    return this.totalSum;
  }

  isCartEmpty(): boolean {
    return this.cartProducts.length === 0;
  }

  addProduct(product: ProductModel): void {
    console.log('Product id: ' + product.id + 'has been added to cart!');
    if (this.isCartContainsProduct(product)) {
      const addedProduct = this.findProductById(product);
      addedProduct.quantity++;
    } else {
      const newProduct = Object.create(product);
      newProduct.quantity = 1;
      this.cartProducts = [...this.cartProducts, newProduct];
    }
    this.updateCartData();
  }

  increaseQuantity(product: ProductModel): void {
    product.quantity++;
    this.updateCartData();
  }

  decreaseQuantity(product: ProductModel): void {
    if (product.quantity - 1 >= 0) {
      product.quantity--;
      this.updateCartData();
    }
  }

  private findProductById(product: ProductModel): ProductModel {
    return this.cartProducts.find((p) => p.id === product.id);
  }

  removeProduct(product: ProductModel): void {
    console.log('Product id: ' + product.id + 'has been removed from cart!');
    this.cartProducts = this.cartProducts.filter(p => p.id !== product.id);
    this.updateCartData();
  }

  isCartContainsProduct(product: ProductModel): boolean {
    return this.cartProducts.some((p) => p.id === product.id);
  }

  removeAllProducts(): void {
    this.cartProducts = [];
    this.updateCartData();
  }

  private updateCartData(): void {
    this.totalQuantity = this.cartProducts.reduce((totalCount, p) => totalCount + p.quantity, 0);
    this.totalSum =  this.cartProducts.reduce((totalPrice, p) => totalPrice + p.price * p.quantity, 0);
  }

}
