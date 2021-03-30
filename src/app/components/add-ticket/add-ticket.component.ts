import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../reducers";
import {createTicket} from "../../reducers/ticket/ticket.actions";

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  public descriptionNewTicket: string;

  constructor(private readonly store$: Store<State>) { }

  ngOnInit(): void {
  }

  createTicket(): void {
    this.store$.dispatch(createTicket({descriptionNewTicket: this.descriptionNewTicket}));
  }

}
