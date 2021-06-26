import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageLoaderService {
  public loadingStatus = {
    contentBlocksReady: false,
    landingAreaReady: false
  };

  constructor() { }

  /**
   * Will update the page loader status by allowing you to pass the name of a part that has finished loading.
   * Additionally, if all of the parts have successfully loaded, then the loading overlay will be closed and the
   * website will be displayed.
   *
   * @param propertyToSetToReady - The name of the property that should be set to ready.
   */
  updatePageLoaderStatus(propertyToSetToReady: string): void {
    // Set the property that was provided to ready.
    if (this.loadingStatus.hasOwnProperty(propertyToSetToReady)) {
      this.loadingStatus[propertyToSetToReady] = true;
    } else {
      throw Error('The propertyToSetToReady that was provided doesn\'t exist in the loadingStatus object.');
    }

    /* Check if all parts have loaded succesfully. If they have, then this method will take care of removing the page
     * loader and displaying the website. */
    for (const key in this.loadingStatus) {
      if (this.loadingStatus[key] === false) {
        return;
      }
    }

    document.querySelector('.site-wrapper').classList.remove('hidden');
    document.querySelector('.loader-overlay-container').classList.add('hidden');

    setTimeout(() => {
      document.querySelector('.loader-overlay-container').remove();
      }, 400); // The delay was added so that the animations sync up nicely.
  }
}
