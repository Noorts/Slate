import { Component, OnInit } from '@angular/core';
import { ContentBlock } from '@models/ContentBlock';
import { Card } from '@models/Card';
import { InfoCard } from '@models/InfoCard';
import { ProjectCard } from '@models/ProjectCard';
import { StrapiService } from '@services/strapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public contentBlocks: ContentBlock[];

  constructor(private strapiService: StrapiService) { }

  ngOnInit(): void {
    this.strapiService.getAllContentBlocks().subscribe(rawContentBlocks => {
      this.contentBlocks = this.setupContentBlocks(rawContentBlocks);
    });
  }

  /**
   * Transforms raw content blocks retrieved from Strapi to objects that Angular can render as content block components.
   *
   * @param rawContentBlocks A JSON that contains a list of raw content blocks.
   */
  setupContentBlocks(rawContentBlocks: any): ContentBlock[] {
    const contentBlocks: ContentBlock[] = [];

    for (const contentBlock of rawContentBlocks) {
      const listOfCards: Card[] = [];
      const contentType = contentBlock.contentType;

      // Set each card to its corresponding card model.
      for (const currentCard of contentBlock[contentType]) {
        const curObj = Object.assign(contentType === 'infoCards' ? new InfoCard() : new ProjectCard(), currentCard);
        listOfCards.push(curObj);
      }

      contentBlocks.push(Object.assign(new ContentBlock(), {
        blockHeader: contentBlock.blockHeader, contentType: contentBlock.contentType, cards: listOfCards
      }));
    }

    return contentBlocks;
  }
}
