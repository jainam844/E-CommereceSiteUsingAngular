import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { SnackbarService } from 'src/app/snackbar.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productList: any;
  searchKey: string = '';
  constructor(private api: ApiService, private cartService: CartService,        private snackbarService: SnackbarService // Inject SnackbarService
  // Inject MatSnackBar
  ) {}
  ngOnInit(): void {
    this.api.getProduct().subscribe(
      (res) => {
        this.productList = res;
        if (Array.isArray(this.productList)) {
          this.productList.forEach((a: any) => {
            Object.assign(a, { quantity: 1, total: a.price });
          });
        } else {
          console.error('Product list is not an array:', this.productList);
        }
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
 
  addToCart(item: any) {
    const existingItem = this.cartService.cartItem.find((cartItem: any) => cartItem.id === item.id);
    if (!existingItem) {
      this.cartService.addToCart(item);

      this.snackbarService.showSuccess('Item added to cart', 'Close');
    } else {
      console.log('Item already exists in the cart:', item.name);
    }
  }
  
}
