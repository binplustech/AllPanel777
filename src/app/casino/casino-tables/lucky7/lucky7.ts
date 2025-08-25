import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IData } from "../../../models/casino.model";

@Component({
  selector: 'app-lucky7',
  standalone: false,
  templateUrl: './lucky7.html',
  styleUrl: './lucky7.css'
})
export class Lucky7 implements OnInit {
	@Input() gameData!: IData | null;
	ngOnInit(): void {
		console.log(this.gameData);
	}

// {
// 	"sid": 1,
// 	"nat": "Low Card",
// 	"b": 0,
// 	"bs": 0,
// 	"l": 0,
// 	"ls": 0,
// 	"sr": 1,
// 	"gstatus": "SUSPENDED",
// 	"visible": 0,
// 	"min": 100,
// 	"max": 100000,
// 	"subtype": "lucky7",
// 	"etype": "Fancy"
// }

}
