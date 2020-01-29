import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/product/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private names = new Array<string>(
    'AMD Ryzen 5 3600',
    'Intel Core i5-9600K',
    'AMD Ryzen 7 3700X',
    'Intel Core i7-9700KF',
    'MSI B360-A PRO',
    'MSI B450 GAMING PLUS MAX',
    'MSI GeForce GTX 1660 Gaming',
    'Sapphire Radeon RX 5700 XT NITRO+',
    'Crucial DDR4 Ballistix Sport LT Gray',
    'Kingston DDR4 HyperX Predator'
  );

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

  addProduct(): void {
    const newProduct = new ProductModel(
      this.products.length + 1,
      this.getRandomName(),
      this.random(15),
      true
    );

    this.products.push(newProduct);
  }

  clearCart(): void {
    this.products = new Array<ProductModel>();
  }

  private random(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  private getRandomName(): string {
    return this.names[this.random(this.names.length)];
  }

}
