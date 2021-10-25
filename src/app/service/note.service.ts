import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NoteModal} from "./noteModal";
import {HttpParams} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()

export class NoteService {
  private hostUrl = 'http://localhost:4000/notes';
  constructor(private http: HttpClient) {
  }

  getNotes(): any {
    return this.http.get(this.hostUrl);
  }

  removeNote(id: string): any {
    return this.http.delete(this.hostUrl + '/' + id);
  }

  noteContains(criteria: string): any {
    console.log('url is' + this.hostUrl + '/find?contains=' + criteria);
    return this.http.get(this.hostUrl + '/find?contains=' + criteria);
  }

  addNotes(noteCriteria: NoteModal): any {
    console.log(noteCriteria);
    return this.http.post<any>(this.hostUrl, { title: noteCriteria.title, note: noteCriteria.note });
  }
}
