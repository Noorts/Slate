import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  template: '',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit {

  @ViewChild('card') cardElement: ElementRef;
  @ViewChild('description') descriptionElement: ElementRef;
  @ViewChild('readMoreContainer') readMoreContainerElement: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    /* The read more button is displayed on a card if its description doesn't fit inside of the card its
     * standard height. Clicking the read more button will allow the card to expand to its required full height.
     *
     * The functionality has been added using classes and a method that runs after view init. It couldn't be
     * done using a simple ngIf in the template because the ngIf is performed before we can determine if the
     * description fits inside of the standard card height.
     */
    if (!this.isDescriptionClamped()) {
      this.readMoreContainerElement.nativeElement.classList.add('hidden');
    }
  }

  /**
   * Check to see if this card its description is clamped. This is used to determine if a read more button should be
   * displayed.
   * @returns whether the description is clamped (text is too long) or not (text fits within the standard card height).
   */
  isDescriptionClamped(): boolean {
    const el = this.descriptionElement.nativeElement;
    return el.scrollHeight > el.clientHeight;
  }

  /**
   * Will reveal this card its full description by changing its styling.
   * This is relevant when the card its description is collapsed because it is too long and the user wishes to view
   * its entire content.
   */
  revealFullDescription(): void {
    this.descriptionElement.nativeElement.classList.add('revealed');
    this.cardElement.nativeElement.classList.add('revealed');
    this.readMoreContainerElement.nativeElement.classList.add('hidden');
  }

}
