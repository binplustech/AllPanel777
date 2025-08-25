import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TABLE_COMPONENTS } from './casino-tables/table-loader';
import { CasinoService } from "../services/casino.service";

@Component({
	selector: 'app-casino',
	standalone: false,
	templateUrl: './casino.html',
	styleUrl: './casino.css'
})

export class Casino implements OnInit {
	private readonly casinoService = inject(CasinoService);

	gameName: string = '';
	gameData: any;
	bets: any[] = [];

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
			this.gameName = params.get('gameName') || 'default';
			this.loadGameContent(this.gameName);
		});
	}

	loadGameContent(gameName: string): void {
		console.log('Loading game content for:', gameName);
		this.casinoService.getCasinoData(gameName).subscribe({
			next: (data): void => {
				console.log('Casino data loaded:', data);
				if (data.success) {
					this.gameData = data.data;
					this.bets = data.data.sub;  // array of bet options
				}
			},
			error: (error): void => {
				console.error('Error loading casino data:', error);
			}
		});
	}
	get component() {
		return TABLE_COMPONENTS[this.gameName] || null;
	}
}
