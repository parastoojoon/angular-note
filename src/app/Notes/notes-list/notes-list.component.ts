import { Component, OnInit } from '@angular/core';
import {NoteService} from "../../service/note.service";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit{
  notes: any;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  search() {
    var query = ((document.getElementById("inputVal") as HTMLInputElement).value);
    console.log(query);
    this.noteService.noteContains(query).subscribe(
      (data: any) => {
        this.notes = data;
        console.log('updated note is' + this.notes);
      }
    )
  }
}
