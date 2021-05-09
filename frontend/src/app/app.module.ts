import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import routes from './routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LandingAreaComponent } from './components/landing-area/landing-area.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { ContentBlockComponent } from './components/content-block/content-block.component';
import { ContentBlocksService, ContentBlocksServiceMock } from '@services/content-blocks.service';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LandingAreaComponent,
    InfoCardComponent,
    ContentBlockComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: ContentBlocksService, useClass: ContentBlocksServiceMock }],
  bootstrap: [AppComponent]
})
export class AppModule { }
