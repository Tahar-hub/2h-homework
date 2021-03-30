import {createAction, props} from "@ngrx/store";
import {Ticket} from "../../../interfaces/ticket.interface";

export const loadTickets = createAction(
    '[Ticket] load tickets'
);

export const loadTicketsSuccess = createAction(
    '[Ticket] load tickets Success',
    props<{ tickets: Ticket[] }>()
);

export const loadTicketsFailure = createAction(
    '[Ticket] load tickets failure',
    props<{ error: string }>()
);

export const createTicket = createAction(
    '[Ticket] create ticket',
    props<{ descriptionNewTicket: string }>()
);

export const loadTicketById = createAction(
    '[Ticket] load ticket by Id',
    props<{ ticketId: number }>()
);

export const loadTicketByIdSuccess = createAction(
    '[Ticket] load ticket by Id success',
    props<{ selectedTicket: Ticket }>()
);

export const completeTicketById = createAction(
    '[Ticket] complete ticket by Id',
    props<{ ticketId: number, completed: boolean }>()
);

export const assignTicketById = createAction(
    '[Ticket] assign ticket by Id',
    props<{ ticketId: number, userId: number }>()
);