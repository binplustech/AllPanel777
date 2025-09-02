import { Component, Input } from '@angular/core';
import { IData, ISub } from "../../../../models/casino.model";

@Component({
  selector: 'app-teenpatti41',
  standalone: false,
  templateUrl: './teenpatti41.html',
  styleUrl: './teenpatti41.css'
})
export class Teenpatti41 {
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
