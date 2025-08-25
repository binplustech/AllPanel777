import { Component, Input } from '@angular/core';
import { IData } from "../../../models/casino.model";

@Component({
  selector: 'app-pokeroneday',
  standalone: false,
  templateUrl: './pokeroneday.html',
  styleUrl: './pokeroneday.css'
})
export class Pokeroneday {
	@Input() gameData!: IData | null;
}
