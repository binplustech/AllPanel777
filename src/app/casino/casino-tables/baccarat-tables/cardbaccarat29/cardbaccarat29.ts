import { Component, Input } from '@angular/core';
import { IData, ISub } from "../../../../models/casino.model";

@Component({
  selector: 'app-cardbaccarat29',
  standalone: false,
  templateUrl: './cardbaccarat29.html',
  styleUrl: './cardbaccarat29.css'
})
export class Cardbaccarat29 {
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
