import { Component, Input } from '@angular/core';
import { IData, ISub } from "../../../../models/casino.model";

@Component({
  selector: 'app-baccarat',
  standalone: false,
  templateUrl: './baccarat.html',
  styleUrl: './baccarat.css'
})
export class Baccarat {
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
