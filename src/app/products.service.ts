import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { ProductModel } from './product-list/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }
  newProduct(item){
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data =>{console.log(data)})
  }
  
  deleteProductData(id){
    return this.http.post("http://localhost:3000/delete",{"id":id})
    .subscribe(data=>{console.log(data)})
  }
  
  putProduct(product:ProductModel){
    return this.http.put("http://localhost:3000"+`/${product.productId}`,product)
    .subscribe(data=>{console.log(data)})
  }

  editProduct(_id){
    return this.http.get<any>("http://localhost:3000/edit"+`/${_id}`);
  }
  updateProduct(id,product)
  {
    console.log(id,product);
    console.log("Update");
    return this.http.put<any>("http://localhost:3000/update"+`/${id}`,product)
    .subscribe(data=>{console.log(data)
    })
  }
}
