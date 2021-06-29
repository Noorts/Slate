import { AfterViewInit, Component, Input } from '@angular/core';
import { CardComponent } from '@components/card/card.component';
import { ProjectCard } from '@models/ProjectCard';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss', '../card/card.component.scss']
})
export class ProjectCardComponent extends CardComponent implements AfterViewInit {

  @Input() model?: ProjectCard = new ProjectCard();

  constructor() {
    /* See the CardComponent for the logic behind the read more functionality. */
    super();
  }
}
