import { AfterViewInit, Component, Input } from '@angular/core';
import { CardComponent } from '@components/card/card.component';
import { InfoCard } from 'src/app/models/InfoCard';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss', '../card/card.component.scss']
})
export class InfoCardComponent extends CardComponent implements AfterViewInit {

  @Input() model?: InfoCard = new InfoCard();

  constructor() {
    /* See the CardComponent for the logic behind the read more functionality. */
    super();
  }
}
