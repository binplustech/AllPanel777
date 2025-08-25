import { Component, Input } from '@angular/core';
import { IData } from "../../../models/casino.model";

@Component({
  selector: 'app-card32-b',
  standalone: false,
  templateUrl: './card32-b.html',
  styleUrl: './card32-b.css'
})
export class Card32B {
	@Input() gameData!: IData | null;
}
