import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
 public productList:any;
 searchKey:string=''
  constructor(private api:ApiService,private cartService:CartService){}
  ngOnInit(): void {
    this.api.getProduct().subscribe(
      res => {
        this.productList = res;
        if (Array.isArray(this.productList)) {
          this.productList.forEach((a: any) => {
            Object.assign(a, { quantity: 1, total: a.price });
          });
        } else {
          console.error('Product list is not an array:', this.productList);
        }
      },
      error => {
        console.error('Error fetching products:', error);
      }
    );
  }
  
  addToCart(item:any){
    this.cartService.addToCart(item);
  }


}
