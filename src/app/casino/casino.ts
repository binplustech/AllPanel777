import { Component, OnInit, inject, WritableSignal, signal, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CasinoTablesType } from './casino-tables/table-loader';
import { CasinoService } from "../services/casino.service";
import { ICasino, ICasinoResult, ICasinoTVUrl, IData, ISub } from "../models/casino.model";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
	selector: 'app-casino',
	standalone: false,
	templateUrl: './casino.html',
	styleUrl: './casino.css'
})

export class Casino implements OnInit, OnDestroy {
	private readonly casinoService = inject(CasinoService);
	private readonly route = inject(ActivatedRoute);
	private readonly sanitizer: DomSanitizer = inject(DomSanitizer);
	private intervalId: number | null = null;
	public currentGameName: CasinoTablesType = CasinoTablesType.default;
	public casinoResKeys!: { [key: string]: string; };
	public gameMID: WritableSignal<number | null> = signal(null);
	public gameData: WritableSignal<IData | null> = signal(null);
	public gameResult: WritableSignal<ICasinoResult | null> = signal(null);
	public safeUrl!: SafeResourceUrl;
	gameName: string = '';
	bets: ISub[] = [];

	constructor() {}

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
			this.gameName = params.get('gameName') || 'default';
			this.currentGameName = CasinoTablesType[this.gameName as keyof typeof CasinoTablesType];
			this.loadGameContent(CasinoTablesType[this.gameName as keyof typeof CasinoTablesType] || 'default');
			this.getTVUrl(CasinoTablesType[this.gameName as keyof typeof CasinoTablesType]);
			this.getCasinoResult(CasinoTablesType[this.gameName as keyof typeof CasinoTablesType]);
			this.casinoResKeys = this.casinoService.casinoResultKeys[CasinoTablesType[this.gameName as keyof typeof CasinoTablesType]];
		});
	}

	ngOnDestroy(): void {
		if (this.intervalId) {
			clearInterval(this.intervalId);
		}
	}

	private loadGameContent(gameName: string): void {
		this.casinoService.getCasinoData(gameName).subscribe({
			next: (data: ICasino): void => {
				if (data.success) {
					if (this.gameMID() !== data.data.mid) {
						this.getCasinoResult(gameName);
						this.gameMID.set(data.data.mid);
					}
					this.gameData.set(data.data);
					this.bets = data.data.sub;
					// this.startInterval();
				}
			},
			error: (): void => {
				this.gameName = 'default';
			}
		});
	}

	private getTVUrl(gameName: string): void {
		this.casinoService.getCasinoTVUrl(gameName).subscribe({
			next: (data: ICasinoTVUrl): void => {
				this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(data.data.tv_url);
			}
		});
	}

	private getCasinoResult(gameName: string): void {
		this.casinoService.getCasinoResult(gameName).subscribe({
			next: (data: ICasinoResult): void => {
				this.gameResult.set(data);
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
