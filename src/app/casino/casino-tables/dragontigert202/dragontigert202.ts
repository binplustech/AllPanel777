import { Component, Input } from '@angular/core';
import { IData } from "../../../models/casino.model";

@Component({
  selector: 'app-dragontigert202',
  standalone: false,
  templateUrl: './dragontigert202.html',
  styleUrl: './dragontigert202.css'
})
export class Dragontigert202 {
	@Input() gameData!: IData | null;
}
