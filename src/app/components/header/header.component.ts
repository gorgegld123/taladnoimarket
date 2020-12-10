import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from 'src/app/admin-dashboard/product/product.component';
import { Product } from '../products/shared/product.model';
import { CrudService } from '../services/crud.service';
import { MessengerService} from '../services/messenger.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  id: number;
  //cartItems : any;
  cartTotal = 0;
  cartItems = [];

  Object = Object;
   

  constructor(private msg: MessengerService , private CrudService: CrudService , private toastr: ToastrService) { 
    //this.cartItems = Array.of(this.cartItems);  
  }

  

  ngOnInit(): void {

    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product)
    })

    //console.log(this.cartItems)
  }

  addProductToCart(product: Product) {
    this.cartItems.push({
      product
    })
 
  }

  public onAddtoCart(){
    console.log(this.cartItems)
    // this.cartItems = this.CrudService.addtoCart;
    // this.cartItems = Array.of(this.cartItems);  
   
  }

  objectKeys(obj) {
    return Object.keys(obj);
}

}
