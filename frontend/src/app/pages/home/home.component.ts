import { Component, OnInit } from '@angular/core';
import { ContentBlock } from '@models/ContentBlock';
import { ContentBlocksService } from '@services/content-blocks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public contentBlocks: ContentBlock[];

  constructor(private contentBlockService: ContentBlocksService) { }

  ngOnInit(): void {
    this.contentBlockService.getAllActivities().subscribe(retrievedContentBlocks => {
      this.contentBlocks = retrievedContentBlocks;
    });
  }
}
