import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor( private http: HttpClient) {}
  products: Products[];

  async ngOnInit() {
    const res = await this.http
      .get<Products[]>(
        'https://prod-7446a-default-rtdb.firebaseio.com/products.json'
      )
      .toPromise();
    console.log(res);
    this.products = res;
  }
}
