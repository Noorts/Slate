import { Component, Input } from '@angular/core';
import { CardComponent } from '@components/card/card.component';
import { ProjectCard } from '@models/ProjectCard';
import { environment } from '@env/environment';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss', '../card/card.component.scss']
})
export class ProjectCardComponent extends CardComponent {

  @Input() model?: ProjectCard = new ProjectCard();
  strapiUrl = environment.strapiApiUrl;

  constructor() {
    super();
  }
}
