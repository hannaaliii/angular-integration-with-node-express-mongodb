import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';
import { Router } from '@angular/router';
import { ProductModel } from '../product-list/product.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
title:String = "Add Products";
  constructor(private productService: ProductService, private router: Router) { }
  productItem = new ProductModel(null,null,null,null,null,null,null,null);

  ngOnInit(): void {
  }
  AddProduct()
  {
    this.productService.newProduct(this.productItem);
    console.log("Called");
    alert("Success");
    this.router.navigate(['/']);
  }
}
