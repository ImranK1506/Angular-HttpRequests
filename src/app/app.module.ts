import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { HttpClientModule } from '@angular/common/http';

import { youtubeSearchInjectables } from './youtube-search/youtube-search.injectables';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { SearchResultComponent } from './youtube-search/search-result/search-result.component';
import { SearchBoxComponent } from './youtube-search/search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    YoutubeSearchComponent,
    SearchResultComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ youtubeSearchInjectables ],
  bootstrap: [AppComponent]
})
export class AppModule { }
