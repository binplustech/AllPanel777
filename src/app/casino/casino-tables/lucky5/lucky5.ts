import { Component, Input } from '@angular/core';
import { IData } from "../../../models/casino.model";

@Component({
  selector: 'app-lucky5',
  standalone: false,
  templateUrl: './lucky5.html',
  styleUrl: './lucky5.css'
})
export class Lucky5 {
	@Input() gameData!: IData | null;
}
