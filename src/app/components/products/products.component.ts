import { ProductsService } from './../../services/products.service';
import { IProducts } from './../../models/products';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProducts[];
  productsSubcription: Subscription;

  constructor(private ProductsService: ProductsService) { }

  ngOnInit(): void {
      this.productsSubcription = this.ProductsService.getProducts().subscribe((data) => {
        this.products = data;
        console.log(data)

      })
  }

  ngOnDestroy() {
    if (this.productsSubcription) this.productsSubcription.unsubscribe();
  }
}
