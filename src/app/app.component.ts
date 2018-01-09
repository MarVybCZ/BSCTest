import { Component, OnInit } from '@angular/core';

import { NoteService } from './services/note.service';

import { Observable } from 'rxjs/Observable';

import { TranslateService }   from './translate';

import { Note } from './classes/Note';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  tempNote = new Note();

  notes: Array<Note> = [new Note()];

  selectedNote: Note;

  public translatedText: string;
  public supportedLanguages: any[];
  
    

  constructor(private noteService: NoteService, private _translate: TranslateService) {

    this.tempNote.id = 0;
    this.tempNote.title = "Loading ...";

    this.notes = new Array<Note>();

    this.notes.push(this.tempNote);

    this.selectedNote = new Note();
  }

  /**
   * Insert new note to list
   * @param note list to insert
   */
  addNote(note: Note): void {
    note.id = 0;
    this.noteService.setNote(note).then((note: Note)=>{
      this.selectedNote = note;
      this.getNotes();
    })
  }

  /**
   * select note for editation
   * @param note for editation
   */
  editNote(note: Note): void {
    this.selectedNote = note;
  }

  /**
   * delete note
   * @param note 
   */
  deleteNote(note: Note): void {
    //this.notes.indexOf(note)
    this.notes.splice(this.notes.indexOf(note), 1);

    if (this.selectedNote != null && note.id == this.selectedNote.id) {
      this.selectedNote = new Note();
    }
  }

  /**
   * update edited note
   * @param note 
   */
  updateNote(note: Note): void {
    this.noteService.setNote(note).then(() => { this.getNotes() });
  }

  /**
   * read notes from server
   */
  getNotes(): Promise<void> {
    return this.noteService.getNotesList().then((notes) => {
      this.notes = <Array<Note>>notes;
    });
  }

  ngOnInit(): void {
    this.getNotes();

    this.supportedLanguages = [
      { display: 'English', value: 'en' },
      { display: 'Czech', value: 'cz' },      
    ];
    
    this.selectLang('en');
  }

  isCurrentLang(lang: string) {
    return lang === this._translate.currentLang;
  }
  
  selectLang(lang: string) {
    // set default;
    this._translate.use(lang);
    this.refreshText();
  }
  
  refreshText() {
    this.translatedText = this._translate.instant('hello world');
  }
}
