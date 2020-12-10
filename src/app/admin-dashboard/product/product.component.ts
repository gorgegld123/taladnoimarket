import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/components/products/shared/categorie.model';
import { Product } from 'src/app/components/products/shared/product.model';

import { CrudService } from 'src/app/components/services/crud.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];

 

  CloseResult = '';
  id: number;
  category : any;
  searchFilters: string;
  product: Product[];



  imageDirectoryPath = 'http://localhost/taladnoi/upload/product/';

  constructor(private CrudService: CrudService, ) { }

  ngOnInit() {
    this.CrudService.getProduct().subscribe(
      (products) => {
        //console.log(products);
        this.product = products;
      }
    );

    this.CrudService.getCategorie().subscribe(
      (categories) => {
        console.log(categories)
        this.category = categories;
      }
    );
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.category.name, event.previousIndex, event.currentIndex);
  // }

  

  get products (){
    return this.product ?
    this.product.filter((product) => 
    this.searchFilters ?
    product.pname.toLowerCase().includes(this.searchFilters) : product)
      : this.product;
  }

   /** เมื่อมีการกดปุ่มแก้ไขของแถวนั้นๆ */
   onEditModal(p: Product) {
    Object.assign(this.CrudService.updateProduct, p);
    //this.CrudService.updateProduct.pname = p.pname;
    //console.log(p)
    console.log(this.CrudService.updateProduct)
  }

}
