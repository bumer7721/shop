import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductModel;
  @Output() addedProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit() {
  }

  onAddToCart(): void {
    console.log('Product ' + this.product.id + ' has been added to cart!');
    this.addedProduct.emit(this.product);
  }

  isAvailable(): boolean {
    return this.product.availability;
  }

}
