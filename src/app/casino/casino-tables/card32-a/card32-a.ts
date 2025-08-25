import { Component, Input } from '@angular/core';
import { IData } from "../../../models/casino.model";

@Component({
  selector: 'app-card32-a',
  standalone: false,
  templateUrl: './card32-a.html',
  styleUrl: './card32-a.css'
})
export class Card32A {
	@Input() gameData!: IData | null;
}
