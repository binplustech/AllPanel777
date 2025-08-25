import { Component, Input } from '@angular/core';
import { IData } from "../../../models/casino.model";

@Component({
  selector: 'app-lucky7eu',
  standalone: false,
  templateUrl: './lucky7eu.html',
  styleUrl: './lucky7eu.css'
})
export class Lucky7eu {
	@Input() gameData!: IData | null;
}
