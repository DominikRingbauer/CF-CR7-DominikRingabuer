import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { offers } from '../offers'

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
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
