import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { PagerComponent } from './components/pager/pager.component';

@NgModule({
  declarations: [AppComponent, PageComponent, PagerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
