import { Injectable } from '@angular/core';
import { InfoCard } from 'src/app/models/InfoCard';
import { ProjectCard } from '@models/ProjectCard';
import { ContentBlock } from 'src/app/models/ContentBlock';
import mockData from 'src/app/data/contentblocksmock.json';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Card } from '@models/Card';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
class ContentBlocksService {
  public data: ContentBlock[] = [];

  constructor(private httpClient: HttpClient) {
    this.load();
  } /* Hook this up to a database later on. */

  load(): void {
    for (const contentblock of mockData) {
      const listOfInfoCards: Card[] = [];
      const contentType = contentblock.contentType;

      for (const currentCard of contentblock.cards) {
        const curObj = Object.assign(contentType === 'info-card' ? new InfoCard() : new ProjectCard(), currentCard);
        listOfInfoCards.push(curObj);
      }
      this.data.push(Object.assign(new ContentBlock(), {
        blockHeader: contentblock.blockHeader, contentType: contentblock.contentType, cards: listOfInfoCards
      }));
    }
  }

  getAllActivities(): Observable<ContentBlock[]> {
    return new Observable<ContentBlock[]>(observer => {
      observer.next(this.data);
    });
  }

  private _httpGetContentBlocks(): Observable<any> {
    return this.httpClient.get<any>(`${environment.strapiApiUrl}/content-blocks`);
  }

  getAllContentBlocks(): Observable<any> {
    return this._httpGetContentBlocks();
  }

  private _httpGetLandingAreaInfo(): Observable<any> {
    return this.httpClient.get<any>(`${environment.strapiApiUrl}/landing-area`);
  }

  getLandingAreaInfo(): Observable<any> {
    return this._httpGetLandingAreaInfo();
  }
}

export { ContentBlocksService };
