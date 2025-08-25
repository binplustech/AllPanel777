import { Component, Input } from '@angular/core';
import { IData } from "../../../models/casino.model";

@Component({
  selector: 'app-dragontigert20',
  standalone: false,
  templateUrl: './dragontigert20.html',
  styleUrl: './dragontigert20.css'
})
export class Dragontigert20 {
	@Input() gameData!: IData | null;
}
