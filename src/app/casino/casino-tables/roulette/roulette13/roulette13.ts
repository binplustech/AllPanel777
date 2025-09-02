import { Component, Input } from '@angular/core';
import { IData, ISub } from "../../../../models/casino.model";

@Component({
  selector: 'app-roulette13',
  standalone: false,
  templateUrl: './roulette13.html',
  styleUrl: './roulette13.css'
})
export class Roulette13 {
	public dataByCardsName: { [key: string]: ISub } = {};
	@Input() gameData!: IData | null;

	ngOnChanges(): void {
		if (this.gameData) {
			this.dataByCardsName = this.gameData.sub.reduce((acc, item) => {
				acc[item.sid] = item;
				return acc;
			}, { } as { [key: string]: ISub });
		}
	}
}
