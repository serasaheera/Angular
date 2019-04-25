import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './component/product-list/product-list.component';
import {AddProductComponent} from './component/add-product/add-product.component';
const routes: Routes = [
  {path:"",component:ProductListComponent},
  {path:"add",component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
