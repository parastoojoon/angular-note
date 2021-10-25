import { Component, OnInit } from '@angular/core';
import {NoteService} from "../service/note.service";
import {Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input() notes: any;

  constructor(private noteService: NoteService,
              private route: Router) { }

  ngOnInit(): void {
    if(this.notes == undefined) {
      this.noteService.getNotes().subscribe(
        (data: any) => {
          this.notes = data;
        }
      )
    }

  }

  remove(id: string) {
    this.noteService.removeNote(id).subscribe(
      (data: any) => {
      }
    );
    window.location.reload();
  }

  navigateToPage(path: any) {
    this.route.navigate([path]);
  }
}
