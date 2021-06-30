import { Component, Input } from '@angular/core';
import { ContentBlock } from '@models/ContentBlock';

@Component({
  selector: 'app-content-block',
  templateUrl: './content-block.component.html',
  styleUrls: ['./content-block.component.scss']
})
export class ContentBlockComponent  {

  @Input() model?: ContentBlock = new ContentBlock();

  constructor() { }
}
