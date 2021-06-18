import { Injectable } from '@angular/core';
import { ContentBlock } from 'src/app/models/ContentBlock';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
class StrapiService {
  public data: ContentBlock[] = [];

  constructor(private httpClient: HttpClient) { }

  private _httpGetLandingAreaInfo(): Observable<any> {
    return this.httpClient.get<any>(`${environment.strapiApiUrl}/landing-area`);
  }

  private _httpGetContentBlocks(): Observable<any> {
    return this.httpClient.get<any>(`${environment.strapiApiUrl}/content-blocks`);
  }

  getLandingAreaInfo(): Observable<any> {
    return this._httpGetLandingAreaInfo();
  }

  getAllContentBlocks(): Observable<any> {
    return this._httpGetContentBlocks();
  }
}

export { StrapiService };
