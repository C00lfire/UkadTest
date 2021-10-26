import { Component, OnInit, ViewChild } from '@angular/core';
import { Products } from '../products.model';

import { SlickCarouselComponent } from 'ngx-slick-carousel';


import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  slideConfig = {
  
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
    responsive: [
      
    
      {
        breakpoint: 1666,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
         
        },
      },
      {
        breakpoint: 1094,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      
    ],
  };

  products: Products[] = [];
  next() {
    this.slickModal.slickNext();
  }
  prev() {
    this.slickModal.slickPrev();
  }

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
