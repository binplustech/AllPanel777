import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IData } from "../../../models/casino.model";

@Component({
  selector: 'app-andarbahar',
  standalone: false,
  templateUrl: './andarbahar.html',
  styleUrl: './andarbahar.css'
})
export class Andarbahar implements OnChanges {
	@Input() gameData!: IData | null;
	public ares: Array<number> = [];
	public bres: Array<number> = [];

	ngOnChanges(): void {
		if (this.gameData) {
			this.ares = this.gameData.ares.split(',').map(Number);
			this.bres = this.gameData.bres.split(',').map(Number);
		}
	}
}
