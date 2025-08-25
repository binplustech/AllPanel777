import { Component, Input } from '@angular/core';
import { IData } from "../../../models/casino.model";

@Component({
  selector: 'app-ab4',
  standalone: false,
  templateUrl: './ab4.html',
  styleUrl: './ab4.css'
})
export class Ab4 {
	@Input() gameData!: IData | null;
}
