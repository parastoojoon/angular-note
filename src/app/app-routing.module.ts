import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotesListComponent} from "./Notes/notes-list/notes-list.component";
import {ContainerComponent} from "./Notes/container/container.component";

const routes: Routes = [
  { path: '', component : ContainerComponent, children: [
      { path: '', component: NotesListComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
