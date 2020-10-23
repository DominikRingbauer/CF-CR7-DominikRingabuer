import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	items;


  constructor(private cartService: CartService) { }



  ngOnInit(): void {
  	this.items = this.cartService.getItems();
  	for (var i of this.items) {	
  		let sum = [this.items[5]];
  		console.log(i.price);
  		document.getElementById("result").innerHTML += i.price;
  	}
  	
  }

}

