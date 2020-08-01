import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductModel } from '../product-list/product.model';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-upadte',
  templateUrl: './upadte.component.html',
  styleUrls: ['./upadte.component.css']
})
export class UpadteComponent implements OnInit {
  title: String = "Update Product";
  id='';
  productItem=<any>('');
  product= new ProductModel(null,null,null,null,null,null,null,null);

 constructor(private productService: ProductService, private router: Router, 
  private route: ActivatedRoute, private fb:FormBuilder) { }
  
  

  ngOnInit(): void {
    this.route.params.subscribe(params => {
    this.id = params['id'];
    console.log(this.id);
   });
    
    this.productService.editProduct(this.id).subscribe((data)=>{
      this.product=JSON.parse(JSON.stringify(data));
      console.log("Placed");
     })
  }
  UpdateProduct()
  {
    console.log(this.product);
    console.log(this.id);
    this.productService.updateProduct(this.id,this.product);
    console.log("Called");
    alert("success");
    this.router.navigate(['/']);
  }
}
