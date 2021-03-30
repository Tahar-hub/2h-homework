import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailsTicketComponent} from "./components/details-ticket/details-ticket.component";
import {ListTicketComponent} from "./components/list-ticket/list-ticket.component";

const routes: Routes = [
  { path: '', component: ListTicketComponent},
  { path: 'details', component: DetailsTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }