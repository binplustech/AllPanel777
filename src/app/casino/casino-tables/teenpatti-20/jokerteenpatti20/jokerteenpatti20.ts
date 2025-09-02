import { Component, Input } from '@angular/core';
import { IData, ISub } from "../../../../models/casino.model";

@Component({
  selector: 'app-jokerteenpatti20',
  standalone: false,
  templateUrl: './jokerteenpatti20.html',
  styleUrl: './jokerteenpatti20.css'
})
export class Jokerteenpatti20 {
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
