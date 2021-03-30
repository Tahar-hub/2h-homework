import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {Ticket} from "../../../interfaces/ticket.interface";
import {Store} from "@ngrx/store";
import {State} from "../../reducers";
import {selectSelectedTicket} from "../../reducers/ticket/ticket.selectors";
import {assignTicketById, completeTicketById} from "../../reducers/ticket/ticket.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-details-ticket',
  templateUrl: './details-ticket.component.html',
  styleUrls: ['./details-ticket.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsTicketComponent implements OnInit {

  selectedTicket$: Observable<Ticket>;

  constructor(private readonly store$: Store<State>,
              private readonly router$: Router) { }

  ngOnInit(): void {
    this.selectedTicket$ = this.store$.select(selectSelectedTicket);
  }

  complete(ticketId: number): void {
    this.store$.dispatch(completeTicketById({ticketId, completed: true}));
  }

  assign(ticketId: number): void {
    this.store$.dispatch(assignTicketById({ticketId, userId: 111}));
  }

  back(): void {
    this.router$.navigate(['']);
  }

}
