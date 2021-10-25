import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {NoteModal} from "../service/noteModal";
import {NoteService} from "../service/note.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {


  checkoutForm = this.formBuilder.group({
    title: '',
    note: ''
  });

  constructor(private formBuilder: FormBuilder,
              private noteService: NoteService,
              private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const note: NoteModal = {
      title: this.checkoutForm.value.title,
      note: this.checkoutForm.value.note
    }
    this.noteService.addNotes(note).subscribe(
      (data: any) => {
        console.log('date is' + data);
      }
    );
    this.route.navigate(['/home']);
  }

  cancel() {
    this.route.navigate(['/home']);
  }
}
