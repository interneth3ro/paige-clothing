import { Routes } from "@angular/router";

import { ProductListComponent } from "./product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

export const ProductListRoutes: Routes = [{
  path: '',
  component: ProductListComponent
},{
  path: 'product-detail/:id',
  component: ProductDetailComponent
}]