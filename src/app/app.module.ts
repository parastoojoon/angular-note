import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterModule, Routes} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './Notes/notes-list/notes-list.component';
import { ContainerComponent } from './Notes/container/container.component';
import { NoteCardComponent } from './note-card/note-card.component';
import {NoteService} from "./service/note.service";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNoteComponent } from './add-note/add-note.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const appRouts: Routes =
  [
    {path: 'add-note', component: AddNoteComponent},
    {path: 'home', component: NoteCardComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    ContainerComponent,
    NoteCardComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    RouterModule.forRoot(
      appRouts,
      {useHash: false, enableTracing: false, onSameUrlNavigation: 'reload'}
    )
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
