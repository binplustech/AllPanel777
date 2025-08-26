import { Component, Input } from '@angular/core';
import { IData } from "../../models/casino.model";

@Component({
  selector: 'app-andar-bahar-card-layout',
  standalone: false,
  templateUrl: './andar-bahar-card-layout.html',
  styleUrl: './andar-bahar-card-layout.css'
})
export class AndarBaharCardLayout {
	@Input() gameData!: IData | null;
}
