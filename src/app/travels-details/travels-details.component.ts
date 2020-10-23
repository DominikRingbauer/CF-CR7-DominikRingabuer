import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { offers } from '../offers';



@Component({
  selector: 'app-travels-details',
  templateUrl: './travels-details.component.html',
  styleUrls: ['./travels-details.component.css']
})
export class TravelsDetailsComponent implements OnInit {
	offer;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(offer) {
    this.cartService.addToCart(offer);
    window.alert("Your trip has been added to the chart!");
  }

  ngOnInit(): void {
  	this.route.paramMap.subscribe(params => {
	this.offer = offers[+params.get('offerId')];
	});
  }

}
