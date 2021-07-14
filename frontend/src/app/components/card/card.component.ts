import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  template: '',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @ViewChild('description') descriptionElement: ElementRef;
  @ViewChild('readMoreContainer') readMoreContainerElement: ElementRef;

  constructor() { }

  /**
   * Will reveal this card its full description by changing its styling.
   * This is relevant when an info card has a description that can be revealed.
   */
  revealFullDescription(): void {
    this.descriptionElement.nativeElement.classList.add('revealed');
    this.readMoreContainerElement.nativeElement.classList.add('hidden');
  }

}
