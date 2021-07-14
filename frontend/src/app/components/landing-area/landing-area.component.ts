import { Component, OnInit } from '@angular/core';
import { PageLoaderService } from '@services/page-loader.service';
import { StrapiService } from '@services/strapi.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-landing-area',
  templateUrl: './landing-area.component.html',
  styleUrls: ['./landing-area.component.scss']
})
export class LandingAreaComponent implements OnInit {
  strapiUrl = environment.strapiApiUrl;
  public landingAreaContent = {
    name: '',
    baseText: '',
    landingPhoto: { url: ''}
  };

  constructor(private strapiService: StrapiService, private pageLoaderService: PageLoaderService) { }

  ngOnInit(): void {
    this.strapiService.getLandingAreaInfo().subscribe(landingAreaContent => {
      this.landingAreaContent = landingAreaContent;
      this.pageLoaderService.updatePageLoaderStatus('landingAreaReady');
    });
  }

}
