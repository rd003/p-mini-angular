import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!:Product[];

  private getProducts(term=""){
    this.productService.getAll(term).subscribe({
      next:(res)=>{
        this.products=res;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
 
  search(term:string){
    this.getProducts(term);
  }

  edit(id:number):void{
    this.router.navigate([`/update-product/${id}`]);
  }

  delete(id:number,index:number):void{
    if(window.confirm("Are your sure to delete??")){
    this.productService.delete(id).subscribe({
      next:(res)=>{
        if(res.statusCode==1){
          this.products.splice(index,1);
        }
        else{
          console.log(res.message);
        }
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  }
  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
  }
  

}
