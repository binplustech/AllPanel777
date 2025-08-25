import { Component, Input } from '@angular/core';
import { IData } from "../../../models/casino.model";

@Component({
  selector: 'app-dragontigerliont20',
  standalone: false,
  templateUrl: './dragontigerliont20.html',
  styleUrl: './dragontigerliont20.css'
})
export class Dragontigerliont20 {
	@Input() gameData!: IData | null;
}
