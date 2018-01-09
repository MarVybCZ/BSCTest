import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Note } from '../classes/Note';

@Injectable()
export class NoteService {

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getNotesList(): Promise<Object> {
        //Access-Control-Allow-Origin: *    

        return this.http.get('http://private-9aad-note10.apiary-mock.com/notes').toPromise().then(
            (value) => {
                //const noteList: Array<Note> = new Array<Note>();

                const noteList = <Array<Note>>value;

                return Promise.resolve(noteList);
            },
            (reason) => {
                console.log(reason);
                throw reason;
            });
    }

    getNote(id: number): Promise<Object> {
        return this.http.get('http://private-9aad-note10.apiary-mock.com/notes/' + id.toString()).toPromise().then(function (value) {
            const note: Note = new Note;

            return Promise.resolve(note);
        })
    }

    setNotes(notes: any): Promise<Object> {
        return this.http.post('http://private-9aad-note10.apiary-mock.com/notes', '').toPromise().then(function (value) {
            const note: Note = new Note;

            return Promise.resolve(note);
        })
    }

    setNote(note: Note): Promise<Object> {
        return this.http.put('http://private-9aad-note10.apiary-mock.com/notes/' + note.id, note.title).toPromise().then(function (value) {
            const note: Note = new Note;

            return Promise.resolve(note);
        })
    }

    deleteNote(note: Note): Promise<Object> {
        return this.http.delete('http://private-9aad-note10.apiary-mock.com/notes/' + note.id).toPromise().then(function (value) {
            const note: Note = new Note;

            return Promise.resolve(note);
        })
    }

    /*
    Methods:
  GET / notes
  GET / notes / {id}
  POST / notes
  PUT / notes / {id}
  DELETE / notes / {id}
  
  */

}