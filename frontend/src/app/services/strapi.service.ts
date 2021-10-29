import { Injectable } from '@angular/core';
import { ContentBlock } from 'src/app/models/ContentBlock';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

/**
 * A service that facilitates pulling data from the Strapi CMS.
 */
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

  private _httpGetContactAreaInfo(): Observable<any> {
    return this.httpClient.get<any>(`${environment.strapiApiUrl}/contact-area`);
  }

  getLandingAreaInfo(): Observable<any> {
    return this._httpGetLandingAreaInfo();
  }

  getAllContentBlocks(): Observable<any> {
    return this._httpGetContentBlocks();
  }

  getContactAreaInfo(): Observable<any> {
    return this._httpGetContactAreaInfo();
  }
}

export { StrapiService };
