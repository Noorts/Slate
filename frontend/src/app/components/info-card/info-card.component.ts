import { Component, Input } from '@angular/core';
import { CardComponent } from '@components/card/card.component';
import { InfoCard } from 'src/app/models/InfoCard';
import { environment } from '@env/environment';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss', '../card/card.component.scss']
})
export class InfoCardComponent extends CardComponent {

  @Input() model?: InfoCard = new InfoCard();
  strapiUrl = environment.strapiApiUrl;

  constructor() {
    /* See the CardComponent for the logic behind the read more functionality. */
    super();
  }
}
