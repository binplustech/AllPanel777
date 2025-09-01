import { Component, Input, OnChanges } from '@angular/core';
import { IData, ISub } from "../../../models/casino.model";

@Component({
  selector: 'app-pokert20',
  standalone: false,
  templateUrl: './pokert20.html',
  styleUrl: './pokert20.css'
})
export class Pokert20 implements OnChanges {
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
