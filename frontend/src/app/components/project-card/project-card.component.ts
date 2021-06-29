import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ProjectCard } from '@models/ProjectCard';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements AfterViewInit {

  @Input() model?: ProjectCard = new ProjectCard();
  @ViewChild('card') infoCardElement: ElementRef;
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
