import { Component, Input } from '@angular/core';
import { IData } from "../../../models/casino.model";

@Component({
  selector: 'app-ab3',
  standalone: false,
  templateUrl: './ab3.html',
  styleUrl: './ab3.css'
})
export class Ab3 {
	@Input() gameData!: IData | null;
}
