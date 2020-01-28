import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  category: Categories;
  colors: Array<string>;

  constructor() {
  }

  ngOnInit() {
    this.name = 'First component';
    this.description = 'Descriprion component';
    this.price = 7;
    this.isAvailable = false;
    this.category = Categories.Hardware;
    this.colors = ['Green', 'Red', 'Black'];
  }

}

enum Categories {
  Hardware,
  Computers,
  Accessories
}
