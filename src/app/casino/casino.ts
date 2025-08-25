import { Component, OnInit, inject, WritableSignal, signal, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CasinoTablesType } from './casino-tables/table-loader';
import { CasinoService } from "../services/casino.service";
import { ICasino, IData, ISub } from "../models/casino.model";

@Component({
	selector: 'app-casino',
	standalone: false,
	templateUrl: './casino.html',
	styleUrl: './casino.css'
})

export class Casino implements OnInit, OnDestroy {
	private readonly casinoService = inject(CasinoService);
	private readonly route = inject(ActivatedRoute);
	private intervalId: number | null = null;
	public currentGameName: CasinoTablesType = CasinoTablesType.default;

	public gameData: WritableSignal<IData | null> = signal(null);
	gameName: string = '';
	bets: ISub[] = [];

	constructor() {}

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
			this.gameName = params.get('gameName') || 'default';
			this.currentGameName = CasinoTablesType[this.gameName as keyof typeof CasinoTablesType];
			this.loadGameContent(CasinoTablesType[this.gameName as keyof typeof CasinoTablesType] || 'default');
		});
	}

	ngOnDestroy(): void {
		if (this.intervalId) {
			clearInterval(this.intervalId);
		}
	}

	loadGameContent(gameName: string): void {
		this.casinoService.getCasinoData(gameName).subscribe({
			next: (data: ICasino): void => {
				if (data.success) {
					this.gameData.set(data.data);
					this.bets = data.data.sub;
					this.startInterval();
				}
			},
			error: (): void => {
				this.gameName = 'default';
			}
		});
	}

	private startInterval(): void {
		if (this.intervalId) {
			clearInterval(this.intervalId);
		}
		this.intervalId = setInterval((): void => {
			this.loadGameContent(this.gameName);
		}, 1000);
	}

	protected readonly CasinoTablesType = CasinoTablesType;
}
