import { Component, Input } from '@angular/core';
import { IData } from "../../../models/casino.model";

@Component({
  selector: 'app-andarbahar2',
  standalone: false,
  templateUrl: './andarbahar2.html',
  styleUrl: './andarbahar2.css'
})
export class Andarbahar2 {
	@Input() gameData!: IData | null;
}
