import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from './translate';

import { NoteService } from './services/note.service';

@NgModule({
  declarations: [
    AppComponent, TranslatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule    
  ],
  providers: [NoteService, TranslateService, TRANSLATION_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
