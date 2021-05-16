import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

class AppComponent implements OnInit {
  title = 'Slate';

  /* An array with the ids of the page anchors.
   * This array is used to select the page anchors so that their height can be determined. */
  idsOfPageAnchors = [];

  ngOnInit(): void {
    /* Setup an array with the ids of the scroll anchors and run the refreshActiveHeaderItem method once to
     * initialize the page with the right header item activated. An EventListener was used instead of a
     * native Angular lifecycle hook because those didn't seem to work. */
    document.addEventListener('DOMContentLoaded', () => {
      this.setupScrollAnchors();
      this.refreshActiveHeaderItem();
    });
  }

  /**
   * Setup an array with the ids of the page anchors.
   * For more information see the variable above.
   */
  setupScrollAnchors(): void {
    const headerElements = document.getElementsByClassName('header-item');
    const listOfHeaderElements = Object.entries(headerElements);

    for (const headerElement of listOfHeaderElements) {
      this.idsOfPageAnchors.push(headerElement['1'].id);
    }
  }

  /**
   * Compare the current page depth and anchor heights to determine which header item should be set to active.
   * The class names of the header items are manipulated to set the appropriate styling.
   */
  public refreshActiveHeaderItem(): void {
    const elements = document.getElementsByClassName('nav-anchor');

    /* A number that indicates the current page depth. */
    const currentPageDepth = document.querySelector('.site-wrapper').scrollTop;

    /* Determine which anchor is the last one that has been scrolled past.
     * We do this because we want to set the active header item to the item that is currently being viewed. */
    let lastAnchorIndex = 0;
    for (let i = 0; i < elements.length; i++) {
      const currentAnchorHeight = (elements[i] as HTMLElement).offsetTop;

      /* Check if we passed this anchor and then set the lastAnchorIndex to that anchor.
       * The + 1 was added to compensate for the difference between page depth and anchor height. */
      if (currentPageDepth + (window.innerHeight / 3) >= currentAnchorHeight) { // TODO 200 should be dynamic by page height?
        lastAnchorIndex = i;
      }
    }

    const idOfNewActiveHeaderItem = this.idsOfPageAnchors[lastAnchorIndex];

    /* Remove the active status from a header item if it is no longer the currently active item. */
    const selectedElements = document.getElementsByClassName('active');
    if (selectedElements.length === 1 && selectedElements[0].id !== idOfNewActiveHeaderItem) {
      selectedElements[0].className = 'header-item text-small-base';
    }

    /* Set the new header item to active. Note: even if the item is already active the className will still be set. */
    const headerItem = document.getElementById(idOfNewActiveHeaderItem);
    if (headerItem) {
      headerItem.className = 'header-item text-small-base active';
    }
  }
}

export { AppComponent };
