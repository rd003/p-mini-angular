import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl=environment.baseUrl+'/category';
  constructor(private http:HttpClient) {

   }

   addUpdate(category:Category){
    return this.http.post<Status>(this.baseUrl+'/addupdate',category);
   }

   getById(id:number){
    return this.http.get<Category>(this.baseUrl+'/getbyid/'+id);
   }

   getAll(){
    return this.http.get<Category[]>(this.baseUrl+'/getall');
   }

   delete(id:number){
    return this.http.delete<Status>(this.baseUrl+'/delete/'+id);
   }



}
