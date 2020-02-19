import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/product/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() product: ProductModel;

  @Output() deleteProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output() addQuantityProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output() subQuantityProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor( ) { }

  ngOnInit() {
  }

  get fullPrice(): number {
    return this.product.quantity * this.product.price;
  }

  addQuantity(): void {
    this.addQuantityProduct.emit(this.product);
  }

  subQuantity(): void {
    this.subQuantityProduct.emit(this.product);
  }

  removeProduct(): void {
    this.deleteProduct.emit(this.product);
  }

}
