import { Component, Input } from '@angular/core';
import { InfoCard } from 'src/app/models/InfoCard';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {

  @Input() model?: InfoCard = new InfoCard();

  constructor() { }
}
