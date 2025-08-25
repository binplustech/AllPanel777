import { Component, Input } from '@angular/core';
import { IData } from "../../../models/casino.model";

@Component({
  selector: 'app-pokert20',
  standalone: false,
  templateUrl: './pokert20.html',
  styleUrl: './pokert20.css'
})
export class Pokert20 {
	@Input() gameData!: IData | null;
}
