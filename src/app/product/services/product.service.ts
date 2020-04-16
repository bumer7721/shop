import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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

  products: Array<ProductModel> = new Array<ProductModel>();

  constructor() {
    const countProducts = 5;

    for ( let i = 0 ; i < countProducts; i++) {
      const quantity = this.random(15);
      const newProduct = new ProductModel(
        this.products.length + 1,
        this.getRandomName(),
        quantity,
        this.random(10000),
        quantity > 0
      );

      this.products.push(newProduct);
    }
  }

  getProducts(): Observable<Array<ProductModel>> {
    return new Observable<Array<ProductModel>>((subsriber: Subscriber<Array<ProductModel>>) => {
        subsriber.next(this.products);
    });
    // можно так
    // return of(this.products);
  }

  private random(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  private getRandomName(): string {
    return this.names[this.random(this.names.length)];
  }
}
