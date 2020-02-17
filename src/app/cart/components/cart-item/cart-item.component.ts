import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/product/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() product: ProductModel;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  removeProduct(product: ProductModel): void {
    this.cartService.removeProduct(product);
  }

}
