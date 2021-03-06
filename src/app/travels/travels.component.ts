import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

import { offers } from '../offers'
import { CartService } from '../cart.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
	products;
	travelForm = new FormGroup({
		gender: new FormControl(""),
		firstName: new FormControl(""),
		lastName: new FormControl(""),
		email: new FormControl("")
	})


	offers = offers;

  constructor() { }

  

  ngOnInit(): void {
  }

}
