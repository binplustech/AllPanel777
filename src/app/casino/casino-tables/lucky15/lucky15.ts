import { Component, Input } from '@angular/core';
import { IData } from "../../../models/casino.model";

@Component({
  selector: 'app-lucky15',
  standalone: false,
  templateUrl: './lucky15.html',
  styleUrl: './lucky15.css'
})
export class Lucky15 {
	@Input() gameData!: IData | null;
}
