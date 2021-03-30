import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Ticket} from "../../../interfaces/ticket.interface";
import {Subscription} from "rxjs";
import {BackendService} from "../../backend.service";
import {Store} from "@ngrx/store";
import {State} from "../../reducers";
import {Router} from "@angular/router";
import {loadTicketById, loadTickets} from "../../reducers/ticket/ticket.actions";
import {selectTicketsList} from "../../reducers/ticket/ticket.selectors";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTicketComponent implements OnInit, OnDestroy {

  public storedTickets:Ticket[];
  public filtredTickets:Ticket[];
  public descriptionFilter: string;
  private subscription: Subscription;

  constructor(private readonly backendService: BackendService,
              private readonly store$: Store<State>,
              private readonly router$: Router,
              private readonly cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.store$.dispatch(loadTickets());
    this.subscription = this.store$.select(selectTicketsList).pipe(
        map(tickets => {
          this.storedTickets = tickets;
          this.filtredTickets = tickets;
          this.cdr.markForCheck();
        }),
    ).subscribe();
  }

  filter(): void {
    this.filtredTickets = this.storedTickets.filter(ticket => ticket.description.indexOf(this.descriptionFilter) > -1);
  }

  goToDetails(ticketId: number){
    this.store$.dispatch(loadTicketById({ticketId}));
    this.router$.navigate(['details']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
