import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/components/products/shared/product.model';
import { CrudService } from 'src/app/components/services/crud.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'
import { HttpClient, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  // public addProductModel: Product = {
  //   pname: '',
  //   price: '',
  //   image: '',
  //   stock: '',
  //   detail: '',
  //   cname: '',
    
  // };


  validateFrom: FormGroup;
  selectedFile: File;

  categorie: any[];



  constructor(private CrudService: CrudService, private route: Router, private toastr: ToastrService, private fb: FormBuilder, private http: HttpClient) {
    this.validateFrom = fb.group({
      pname: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      cname: ['', Validators.required],
      detail: ['', Validators.required],

    });

  }

  ngOnInit(): void {

    this.CrudService.getCategorie().subscribe(
      (categories) => {
        console.log(categories)
        this.categorie = categories;
      }
    );

  }


  url = '';

  onFileChanged(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
      this.selectedFile = event.target.files[0];
      //console.log(this.selectedFile);
    }
  }

  onUpload() {
    const formData = new FormData();
    formData.append('files', this.selectedFile , this.selectedFile.name);
    this.http.post('http://localhost/taladnoi/upload/upload.php', formData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(res => {
      if (res.type === HttpEventType.UploadProgress) {
        console.log(res);
        console.log('Upload : ' + Math.round(res.loaded / res.total * 100) + '%')
      } else if (res.type === HttpEventType.Response) {
        console.log(res);
      }
    }, (err) => { });
  }


  onSubmit() {

    if (!this.selectedFile) {
      this.toastr.error('กรุณาเพิ่มรูปภาพสินค้า', 'เกิดข้อผิดพลาด !')
    }

    else if (this.validateFrom.invalid) {
      this.toastr.error('กรุณากรอกข้อมูลสินค้าที่ต้องการเพิ่มให้ครบ', 'เกิดข้อผิดพลาด !');
    }
    else {
      //console.log(this.validateFrom.value);
      this.onUpload();
      this.CrudService.postProduct(this.validateFrom.value).subscribe(
      );
      this.toastr.success('เพิ่มข้อมูลสินค้าเรียบร้อย', 'สำเร็จ !');
      this.validateFrom.reset();
      window.location.reload();
    }
    //this.CrudService.postProduct(this.addProductModel).subscribe(
    //);

  }

}
