import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { FooteronlylayoutComponent } from './layout/footeronlylayout/footeronlylayout.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NiceSelectModule } from "ng-nice-select";
import {ReactiveFormsModule} from '@angular/forms';
import { CartItemComponent } from './components/cart-item/cart-item.component'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CheckoutComponent,
    HomeComponent,
    ProductsComponent,
    ThankyouComponent,
    ProductDetailComponent,
    LayoutComponent,
    FooteronlylayoutComponent,
    CartItemComponent,

  ],
  imports: [
    BrowserModule,FormsModule,MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NiceSelectModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


