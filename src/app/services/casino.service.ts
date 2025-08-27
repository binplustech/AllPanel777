import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICasino, ICasinoResult, ICasinoTVUrl } from "../models/casino.model";
import { CasinoTablesType } from "../casino/casino-tables/table-loader";

@Injectable({
	providedIn: 'root'
})
export class CasinoService {
	// private readonly baseUrl: string = environment.apiUrl + 'casino/';
	private readonly baseUrl: string = environment.apiUrl;
	private readonly http: HttpClient = inject(HttpClient);
	public readonly casinoResultKeys: { [key: string]: { [key: string]: string; } } = {
		[CasinoTablesType.lucky7]: {"0":"T","1":"L","2":"H","3":"7x"},
		[CasinoTablesType.lucky7eu]: {"0":"T","1":"L","2":"H","3":"7x"},
		[CasinoTablesType.lucky7eu2]: {"0":"T","1":"L","2":"H","3":"7x"},
		[CasinoTablesType.lucky5]: {"0":"T","1":"L","2":"H","3":"7x"},
		[CasinoTablesType.lucky15]: {"0":"0","1":"0","2":"1","3":"2", "4": '4', "5": '6', "6": 'W'},
		[CasinoTablesType.ab3]: {"0":"R"},
		[CasinoTablesType.ab4]: {"0":"R"},
		[CasinoTablesType.dragontigert20]: { '2': 'T', '1': 'D' },
		[CasinoTablesType.dragontigeroneday]: { '0': 'T', '1': 'D' },
		[CasinoTablesType.dragontigert202]: { '2': 'T', '1': 'D' },
		[CasinoTablesType.dragontigerliont20]: { '0': 'T', '1': 'D', '2': 'L' },
	};

	public readonly classesByGameType: { [key: string]: string } = {
		default: 'lucky7',
		lucky7: 'lucky7',
		lucky5: 'lucky7',
		lucky7eu: 'lucky7 lucky7eu',
		lucky7eu2: 'lucky7 lucky7eu lucky7eu2',
		lucky15: 'ball-by-ball',
		ab20: 'andar-bahar',
		abj: 'andar-bahar2',
		ab3: 'andar-bahar andar-bahar-3',
		ab4: 'andar-bahar andar-bahar-3 andar-bahar-4',
		dt6: 'dt1day',
		dt20: 'dt20',
		dtl20: 'dtl20',
		dt202: 'dt20',
		poker: 'poker1day',
		poker20: 'poker20',
		poker6: 'poker6player',
		cards32: 'cards32a',
		cards32eu: 'cards32b'
	};

	public getCasinoData(type: string): Observable<ICasino> {
		// const url = `${this.baseUrl}data`;
		const url = `${this.baseUrl}getdata/${type}`;
		// const params = new HttpParams().set('type', type);
		return this.http.get<ICasino>(url);
	}

	public getCasinoTVUrl(type: string): Observable<ICasinoTVUrl> {
		const url = `${this.baseUrl}tv_url`;
		const params = new HttpParams().set('id', type);
		return this.http.get<ICasinoTVUrl>(url, { params });
	}

	public getCasinoResult(type: string): Observable<ICasinoResult> {
		// const url = `${this.baseUrl}result`;
		const url = `${this.baseUrl}getresult/${type}`;
		// const params = new HttpParams().set('type', type);
		return this.http.get<ICasinoResult>(url);
	}
}
