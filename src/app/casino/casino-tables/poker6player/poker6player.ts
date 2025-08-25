import { Component, Input } from '@angular/core';
import { IData } from "../../../models/casino.model";

@Component({
  selector: 'app-poker6player',
  standalone: false,
  templateUrl: './poker6player.html',
  styleUrl: './poker6player.css'
})
export class Poker6player {
	@Input() gameData!: IData | null;
}
