import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/product/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Array<ProductModel>;

  constructor() {
    this.products = new Array<ProductModel>();
  }

  getProducts(): Array<ProductModel> {
    return this.products;
  }

  getTotalCountOfProducts(): number {
    return this.products.reduce((totalCount, p) => totalCount + p.quantity, 0);
  }

  getTotalPrice(): number {
    return this.products.reduce((totalPrice, p) => totalPrice + p.price, 0);
  }

  isCartEmpty(): boolean {
    return this.products.length === 0;
  }

  addProduct(product: ProductModel): void {
    console.log('Product id: ' + product.id + 'has been added to cart!');
    if (this.isCartContainsProduct(product)) {
      const addedProduct = this.findProductById(product);
      addedProduct.quantity++;
    } else {
      const newProduct = Object.create(product);
      newProduct.quantity = 1;
      this.products = [...this.products, newProduct];
    }
  }

  addQuantity(product: ProductModel): void {
    product.quantity++;
  }

  subQuantity(product: ProductModel): void {
    if (product.quantity - 1 >= 0) {
      product.quantity--;
    }
  }

  private findProductById(product: ProductModel): ProductModel {
    return this.products.find((p) => p.id === product.id);
  }

  removeProduct(product: ProductModel): void {
    console.log('Product id: ' + product.id + 'has been removed from cart!');
    this.products = this.products.filter(p => p.id !== product.id);
  }

  isCartContainsProduct(product: ProductModel): boolean {
    return this.products.some((p) => p.id === product.id);
  }

  clearCart(): void {
    this.products = [];
  }

}
