// import { AbsoluteSourceSpan } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductComponent },
  { path: '', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
