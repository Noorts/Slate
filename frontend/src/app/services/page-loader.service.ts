import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageLoaderService {
  public loadingStatus = {
    contentBlocksReady: false,
    landingAreaReady: false,
    test: false
  };

  constructor() { }

  displayPage(propertyToSetToReady: string): void {
    // Set the property that has finished loading to ready.
    if (this.loadingStatus.hasOwnProperty(propertyToSetToReady)) {
      this.loadingStatus[propertyToSetToReady] = true;
    } else {
      throw Error('The propertyToSetToReady that was provided doesn\'t exist in the loadingStatus object.');
    }

    for (const key in this.loadingStatus) {
      if (this.loadingStatus[key] === false) {
        return;
      }
    }

    document.querySelector('.site-wrapper').classList.remove('hidden');
    document.querySelector('.loader-overlay-container').classList.add('hidden');

    setTimeout(() => {
      document.querySelector('.loader-overlay-container').remove();
      }, 400);
  }
}
