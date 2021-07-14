import { Component, OnInit } from '@angular/core';
import { ContentBlock } from '@models/ContentBlock';
import { Card } from '@models/Card';
import { InfoCard } from '@models/InfoCard';
import { ProjectCard } from '@models/ProjectCard';
import { StrapiService } from '@services/strapi.service';
import { ActivatedRoute } from '@angular/router';
import { PageLoaderService } from '@services/page-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public contentBlocks: ContentBlock[];

  constructor(private strapiService: StrapiService, private route: ActivatedRoute,
    private pageLoaderService: PageLoaderService) { }

  ngOnInit(): void {
    this.strapiService.getAllContentBlocks().subscribe(rawContentBlocks => {
      this.contentBlocks = this.setupContentBlocks(rawContentBlocks);

      this.pageLoaderService.updatePageLoaderStatus('contentBlocksReady');

      setTimeout(() => {
        /* Timeout added because the DOM needs to be updated with the content blocks.
        * This should be done dynamically, maybe using a lifecycle hook. */
        this.scrollToFragmentAnchor();
      }, 100);
    });
  }

  /**
   * Will scroll the view to the section that is contained in the URL as a fragment.
   *
   * Because a large portion of the home page is loaded asynchronously,
   * we have to scroll their programmatically after the content has loaded.
   */
  scrollToFragmentAnchor(): void {
    const fragment = this.route.snapshot.fragment;
    if (fragment != null) {
      const anchor = document.getElementById(fragment);
      anchor.scrollIntoView({behavior: 'auto'});
    }
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
