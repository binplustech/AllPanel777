import { Component, Input } from '@angular/core';
import { IData } from "../../../models/casino.model";

@Component({
  selector: 'app-lucky7',
  standalone: false,
  templateUrl: './lucky7.html',
  styleUrl: './lucky7.css'
})
export class Lucky7 {
	@Input() gameData!: IData | null;
}
