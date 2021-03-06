import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import routes from './routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { LandingAreaComponent } from './components/landing-area/landing-area.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { ContentBlockComponent } from './components/content-block/content-block.component';
import { StrapiService } from '@services/strapi.service';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ContactAreaComponent } from './components/contact-area/contact-area.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingAreaComponent,
    InfoCardComponent,
    ContentBlockComponent,
    ProjectCardComponent,
    ContactAreaComponent,
    CardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StrapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
