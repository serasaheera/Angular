import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { modelproduct } from '../product-list/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps:ProductService) { }
  productItem= new modelproduct(null,null,null,null,null,null,null,null);


  ngOnInit() {
  }
 AddProduct()
 {
   this.ps.newProduct(this.productItem);
   alert("success");
 }
}
