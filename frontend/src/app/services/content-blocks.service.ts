import { Injectable } from '@angular/core';
import { InfoCard } from 'src/app/models/InfoCard';
import { ContentBlock } from 'src/app/models/ContentBlock';
import mockData from 'src/app/data/contentblocksmock.json';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
class ContentBlocksService {
  public data: ContentBlock[] = [];

  constructor() { } /* Hook this up to a database later on. */

  getAllActivities(): Observable<ContentBlock[]> {
    return null; /* Retrieve data from the database here. */
  }
}

@Injectable()
class ContentBlocksServiceMock extends ContentBlocksService {

  constructor() {
    super();
    this.load();
  }

  load(): void {
    for (const contentblock of mockData) {
      const listOfInfoCards = [];
      for (const infoCard of contentblock.infoCards) {
        listOfInfoCards.push(Object.assign(new InfoCard(), infoCard));
      }
      this.data.push(Object.assign(new ContentBlock(), {
        blockHeader: contentblock.blockHeader, infoCards: listOfInfoCards
      }));
    }
  }

  getAllActivities(): Observable<ContentBlock[]> {
    return new Observable<ContentBlock[]>(observer => {
      observer.next(this.data);
    });
  }

}

export { ContentBlocksService, ContentBlocksServiceMock };
