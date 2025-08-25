import { Component, Input } from '@angular/core';
import { IData } from "../../../models/casino.model";

@Component({
  selector: 'app-andarbahar',
  standalone: false,
  templateUrl: './andarbahar.html',
  styleUrl: './andarbahar.css'
})
export class Andarbahar {
	@Input() gameData!: IData | null;
}
