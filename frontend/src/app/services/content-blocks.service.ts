import { Injectable } from '@angular/core';
import { InfoCard } from 'src/app/models/InfoCard';
import { ProjectCard } from '@models/ProjectCard';
import { ContentBlock } from 'src/app/models/ContentBlock';
import mockData from 'src/app/data/contentblocksmock.json';
import { Observable } from 'rxjs';
import { Card } from '@models/Card';

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

}

export { ContentBlocksService, ContentBlocksServiceMock };
