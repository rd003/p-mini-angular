import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddProuductComponent } from './components/add-prouduct/add-prouduct.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:'add-product',component:AddProuductComponent},
  {path:'update-product/:id',component:AddProuductComponent},
  {path:'products',component:ProductsComponent},
  {path:'add-category',component:AddCategoryComponent},
  {path:'update-category/:id',component:AddCategoryComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'',redirectTo:'/products',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
