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

  isCartEmpty(): boolean {
    return this.products.length === 0;
  }

  addProduct(product: ProductModel): void {
    console.log('Product id: ' + product.id + 'has been added to cart!');
    this.products.push(product);
  }

  clearCart(): void {
    this.products.splice(0, this.products.length);
  }

}
