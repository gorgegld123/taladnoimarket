import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../products/shared/categorie.model';
import { Product } from '../products/shared/product.model';
import { map } from 'rxjs/operators';
import { Category } from '../products/shared/productincat.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  public url = 'http://localhost/taladnoiapi/';
  public url2 ='https://projectprofessorhon.000webhostapp.com/homestay_api/'
  public updateProduct:Product = Object.assign({});
  public addtoCart:Product = Object.assign({});
  public updateCategories:Category = Object.assign({});

  constructor(private http: HttpClient) { }

  test(): Observable<any> {
    return this.http.get<any>(this.url2 + 'api_getRoomAdmin.php')
  }

  getProduct(): Observable<Product []> {
    return this.http.get<Product []>(this.url + 'get_product_api.php')
  }

  // Get single product
  getProductDetails(id): Observable<any> {
    return this.http.get<any>(this.url + 'get_productdetail_api.php?id=' + id)
  }

  getCategorie() : Observable<Categorie[]>{ 
    return this.http.get<Categorie[]>(this.url + 'get_productcat_api.php');
  }

  postProduct(value: Product) {
    return this.http.post(this.url + 'createproduct.php' , value);
  }

  editProduct(id: any , value: Product){
    return this.http.put(this.url + 'updateproduct.php' ,value , { params: {id:id}});
  }
  editCategories(id: any , value: Category){
    return this.http.put(this.url + 'updatecategory.php' ,value , { params: {id:id}});
  }
  
  getProductinCat(): Observable<any> {
    return this.http.get<any>(this.url + 'productincat.php');
  }

  postCategory(value: Categorie) {
    return this.http.post(this.url + 'createcategory.php' ,value);
  }

}
