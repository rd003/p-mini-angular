import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl=environment.baseUrl+'/product';
  constructor(private http:HttpClient) {

   }

   addUpdate(product:Product){
    return this.http.post<Status>(this.baseUrl+'/addupdate',product);
   }

   getById(id:number){
    return this.http.get<Product>(this.baseUrl+'/getbyid/'+id);
   }

   getAll(term:string=""){
    return this.http.get<Product[]>(this.baseUrl+`/getall?term=${term}`);
   }

   delete(id:number){
    return this.http.delete<Status>(this.baseUrl+'/delete/'+id);
   }
}
