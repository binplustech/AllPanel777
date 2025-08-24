import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICasino } from "../models/casino.model";

@Injectable({
  providedIn: 'root'
})
export class CasinoService {
  private readonly baseUrl: string = environment.apiUrl + 'casino/data';
  private readonly http: HttpClient = inject(HttpClient);

  public getCasinoData(type: string): Observable<ICasino> {
    const params = new HttpParams().set('type', type);
    return this.http.get<ICasino>(this.baseUrl, { params });
  }
}
