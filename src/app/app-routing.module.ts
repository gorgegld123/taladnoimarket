import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { FooteronlylayoutComponent } from './layout/footeronlylayout/footeronlylayout.component';


const routes: Routes = [
{
  path: '' , component: LayoutComponent,
  children: [
    { path: '', component: HomeComponent },
  ]
},
{
  path: 'products' , component: LayoutComponent,
  children: [
    { path: '', component: ProductsComponent },
  ]
},
{
  path: 'product/:id' , component: LayoutComponent ,
  children: [
    { path: '', component: ProductDetailComponent },
  ]
},
{
  path: 'cart' , component:  FooteronlylayoutComponent,
  children: [
    { path: '', component: CartComponent },
  ]
},
{
  path: 'footer' , component: FooterComponent
},

{ path : 'auth' , loadChildren: () => import('./admin-dashboard/admindashboard.module').then(m => m.AdminDashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
