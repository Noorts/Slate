import { Component, OnInit } from '@angular/core';
import { PageLoaderService } from '@services/page-loader.service';
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

  constructor(private strapiService: StrapiService, private pageLoaderService: PageLoaderService) { }

  ngOnInit(): void {
    this.strapiService.getLandingAreaInfo().subscribe(landingAreaContent => {
      this.landingAreaContent = landingAreaContent;
      this.pageLoaderService.updatePageLoaderStatus('landingAreaReady');
    });
  }

}
