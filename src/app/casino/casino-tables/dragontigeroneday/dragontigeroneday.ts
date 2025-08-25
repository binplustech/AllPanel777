import { Component, Input } from '@angular/core';
import { IData } from "../../../models/casino.model";

@Component({
  selector: 'app-dragontigeroneday',
  standalone: false,
  templateUrl: './dragontigeroneday.html',
  styleUrl: './dragontigeroneday.css'
})
export class Dragontigeroneday {
	@Input() gameData!: IData | null;
}
