import { Component, Input } from '@angular/core';
import { IData } from "../../../models/casino.model";

@Component({
  selector: 'app-lucky7eu2',
  standalone: false,
  templateUrl: './lucky7eu2.html',
  styleUrl: './lucky7eu2.css'
})
export class Lucky7eu2 {
	@Input() gameData!: IData | null;
}
