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

  setupContentBlocks(rawContentBlocks: any): ContentBlock[] {
    const contentBlocks: ContentBlock[] = [];

    for (const contentblock of rawContentBlocks) {
      const listOfCards: Card[] = [];
      const contentType = contentblock.contentType;
      const contentBlockCards = contentblock[contentType];

      for (const currentCard of contentBlockCards) {
        const curObj = Object.assign(contentType === 'infoCards' ? new InfoCard() : new ProjectCard(), currentCard);
        listOfCards.push(curObj);
      }

      contentBlocks.push(Object.assign(new ContentBlock(), {
        blockHeader: contentblock.blockHeader, contentType: contentblock.contentType, cards: listOfCards
      }));
    }

    return contentBlocks;
  }
}
