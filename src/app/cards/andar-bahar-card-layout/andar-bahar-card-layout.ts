import { Component, Input, OnInit } from '@angular/core';
import { IData } from "../../models/casino.model";

@Component({
  selector: 'app-andar-bahar-card-layout',
  standalone: false,
  templateUrl: './andar-bahar-card-layout.html',
  styleUrl: './andar-bahar-card-layout.css'
})
export class AndarBaharCardLayout implements OnInit {
	@Input() gameData!: IData | null;
	slideStore: Array<string> = [];
	slideConfig = {
		infinite: false,
		speed: 4000,
		slidesToShow: 7,
		slidesToScroll: 3,
		autoplay: false,
		autoplaySpeed: 0,
		cssEase: 'linear',
		arrows: true,
		dots: true,
		pauseOnHover: false,
		pauseOnFocus: false,
		variableWidth: true
	};

	ngOnInit(): void {
		if (this.gameData?.card) {
			this.slideStore = this.gameData?.card.split(',').map(item => 'http://localhost:4200/v162/static/front/img/cards/' + item.trim() + '.png');
			console.log(this.slideStore);
		}
	}

	slickInit(): void { }
}
