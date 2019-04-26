import { Component, OnInit } from '@angular/core';
import { modelproduct } from './product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService]
})
export class ProductListComponent implements OnInit {
  
  imagewidth: number = 50;
  imagemargin: number = 2;
  showImage: boolean = false;
  
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  products: modelproduct[] ; 
  constructor(private ps: ProductService) { }

  ngOnInit():void {
    this.ps.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
  }

}
