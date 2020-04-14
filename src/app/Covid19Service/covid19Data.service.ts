import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19DataService {

  constructor(private http: HttpClient) { }

  getStatsWorldWide() {
    return this.http.get('https://corona.lmao.ninja/v2/all?yesterday=true');
  }
}
