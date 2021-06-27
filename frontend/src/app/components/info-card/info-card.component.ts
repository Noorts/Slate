import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { InfoCard } from 'src/app/models/InfoCard';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements AfterViewInit {

  @Input() model?: InfoCard = new InfoCard();
  @ViewChild('infoCard') infoCardElement: ElementRef;
  @ViewChild('description') descriptionElement: ElementRef;
  @ViewChild('readMoreContainer') readMoreContainerElement: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    if (!this.isDescriptionClamped()) {
      this.readMoreContainerElement.nativeElement.classList.add('hidden');
    }
  }

  isDescriptionClamped(): boolean {
    const el = this.descriptionElement.nativeElement;
    return el.scrollHeight > el.clientHeight;
  }

  revealFullDescription(): void {
    this.descriptionElement.nativeElement.classList.add('revealed');
    this.infoCardElement.nativeElement.classList.add('revealed');
    this.readMoreContainerElement.nativeElement.classList.add('hidden');
  }
}
