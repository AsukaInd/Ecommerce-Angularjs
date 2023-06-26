import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  productList: any [] = [];
  cartObj: any ={
    "CartId": 0,
    "CustId": 1,
    "ProductId": 0,
    "Quantity": 0,
    "AddedDate": "2023-06-22T07:06:27.446Z"
  }

  constructor(private productServie: ProductService) {

  }

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts(){
    
    this.productServie.getAllProducts().subscribe((result:any) => {
      this.productList = result.data;
    })
  }

 addItemToCart(ProductId: Number) {
  this.cartObj.ProductId = ProductId
  this.productServie.addToCart(this.cartObj).subscribe((result:any) => {
    this.productList = result.data;
  })
 }

} 
