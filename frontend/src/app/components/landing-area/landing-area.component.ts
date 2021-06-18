import { Component, OnInit } from '@angular/core';
import { ContentBlocksService } from '@services/content-blocks.service';

@Component({
  selector: 'app-landing-area',
  templateUrl: './landing-area.component.html',
  styleUrls: ['./landing-area.component.scss']
})
export class LandingAreaComponent implements OnInit {
  public landingAreaContent = {
    intro_text: '',
    name: '',
    base_text: ''
  };

  constructor(private contentBlockService: ContentBlocksService) { }

  ngOnInit(): void {
    this.contentBlockService.getLandingAreaInfo().subscribe(landingAreaContent => {
      this.landingAreaContent = landingAreaContent;
    });
  }

}
