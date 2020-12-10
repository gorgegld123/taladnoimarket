import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Categorie } from './shared/categorie.model';
import { Product } from './shared/product.model';
import { SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { CrudService } from '../services/crud.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MessengerService } from '../services/messenger.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  selectedCity: Categorie[];
  selectedCountries: any[];

  CloseResult = '';
  id: number;
  categorie$: any[];
  category = '';
  searchFilters: string;
  product: Product[];
  @Input() productDetail: Product[];

  testapi: any;


  addtoCart: any;

  imageDirectoryPath = 'http://localhost/taladnoi/upload/product/';

  constructor(private CrudService: CrudService, private modalService: NgbModal, private route: ActivatedRoute, private toastr: ToastrService,
    private msg: MessengerService) { }

  ngOnInit() {
    this.CrudService.getProduct().subscribe(
      (products) => {
        //console.log(products);
        this.product = products;
      }
    );

    this.CrudService.getCategorie().subscribe(
      (categorie) => {
        console.log(categorie)
        this.categorie$ = categorie;
      }
    );

    this.testMethod();

  }


  get products() {
    return this.product ?
      this.product.filter((product) =>
        this.searchFilters ?
          product.pname.toLowerCase().includes(this.searchFilters) : product)
      : this.product;
  }


  open(content) {
    this.modalService.open(content, { size: 'lg', backdrop: 'static', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.CloseResult = `Closed with: ${result}`;
    });
  }

  onAddtoCart(p: Product) {
    Object.assign(this.CrudService.addtoCart, p);
    //this.CrudService.updateProduct.pname = p.pname;
    //console.log(p)
    this.addtoCart = this.CrudService.addtoCart;
    this.toastr.success('เพิ่มสินค้าเข้าตะกร้าสินค้า', 'สำเร็จ !');
    //this.handleAddtoCart();
  }

  handleAddtoCart(p: Product) {
    this.msg.sendMsg(p);
    //console.log(p)

    //this.toastr.success('เพิ่มสินค้าเข้าตะกร้าสินค้า', 'สำเร็จ !');
  }

  testMethod() {
    this.CrudService.test().subscribe(
      (products2) => {
        //console.log(products);
        this.testapi = products2;
        console.log(this.testapi)
      }
    )
  };
}
