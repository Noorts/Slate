import { Component, OnInit } from '@angular/core';
import { StrapiService } from '@services/strapi.service';

@Component({
  selector: 'app-landing-area',
  templateUrl: './landing-area.component.html',
  styleUrls: ['./landing-area.component.scss']
})
export class LandingAreaComponent implements OnInit {
  public landingAreaContent = {
    introText: '',
    name: '',
    baseText: ''
  };

  constructor(private strapiService: StrapiService) { }

  ngOnInit(): void {
    this.strapiService.getLandingAreaInfo().subscribe(landingAreaContent => {
      this.landingAreaContent = landingAreaContent;
    });
  }

}
