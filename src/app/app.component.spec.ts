import { TestBed, async } from '@angular/core/testing';

import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { browser } from 'protractor';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from './translate';
import { NoteService } from './services/note.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, TranslatePipe
      ],
      imports: [        
        HttpClientModule    
      ],
      providers: [NoteService, TranslateService, TRANSLATION_PROVIDERS]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Notes Editor BSCTest');
  }));
  it('should read notes and return array langth 2', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    
    fixture.componentInstance.getNotes().then((notes: any) => {
      expect(notes.length).toBe(2);
    })
    

    
    //expect(compiled.querySelector('h1').textContent).toContain('Notes Editor BSCTest');
  }));
});
