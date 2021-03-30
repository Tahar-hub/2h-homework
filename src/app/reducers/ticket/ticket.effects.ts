import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as  TicketActions from './ticket.actions'
import {Injectable} from "@angular/core";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {BackendService} from "../../backend.service";
import {of} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class TicketsEffects {

createTicket$ = createEffect(() => this.actions$.pipe(
    ofType(TicketActions.createTicket),
    switchMap( ({descriptionNewTicket}) => {
        return this.backendService.newTicket(descriptionNewTicket).pipe(
            map(() => TicketActions.loadTickets())
        )
    })
));

loadTickets$ = createEffect(() => this.actions$.pipe(
    ofType(TicketActions.loadTickets),
    switchMap( () => {
        return this.backendService.tickets().pipe(
            map((tickets) => TicketActions.loadTicketsSuccess({tickets})),
            catchError((error: string) =>
                of(TicketActions.loadTicketsFailure({ error }))
            )
        )
    })
));

loadTicketById$ = createEffect(() => this.actions$.pipe(
    ofType(TicketActions.loadTicketById),
    switchMap( ({ ticketId }) => {
        return this.backendService.ticket(ticketId).pipe(
            map((selectedTicket) => {
                return TicketActions.loadTicketByIdSuccess({selectedTicket});
            }),
        )
    })
));

completeTicket$ = createEffect(() => this.actions$.pipe(
    ofType(TicketActions.completeTicketById),
    switchMap( ({ ticketId, completed }) => {
        return this.backendService.complete(ticketId, completed).pipe(
            map(() => {
                return TicketActions.loadTicketById({ticketId});
            }),
        )
    })
));

assignTicket$ = createEffect(() => this.actions$.pipe(
    ofType(TicketActions.assignTicketById),
    switchMap( ({ ticketId, userId }) => {
        return this.backendService.assign(ticketId, userId).pipe(
            map(() => {
                return TicketActions.loadTicketById({ticketId});
            }),
        )
    })
));


constructor(
    private readonly actions$: Actions,
    private readonly backendService: BackendService,
    private readonly router$: Router
) { }

}