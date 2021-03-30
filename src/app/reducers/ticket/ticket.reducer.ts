import {Action, createReducer, on} from '@ngrx/store';
import * as  TicketActions from './ticket.actions'
import {Ticket} from "../../../interfaces/ticket.interface";

export const ticketKey = 'ticket';

export interface TicketState {
    descriptionNewTicket: string;
    tickets: Ticket[];
    selectedTicket: Ticket;
}

export const initialState: TicketState = {
    descriptionNewTicket: null,
    tickets: null,
    selectedTicket: null
};

const ticketReducer = createReducer(
    initialState,

    on(TicketActions.createTicket, (state, { descriptionNewTicket }) => ({
        ...state,
        descriptionNewTicket
    })),

    on(TicketActions.loadTicketsSuccess, (state, { tickets }) => ({
        ...state,
        tickets
    })),

    on(TicketActions.loadTicketByIdSuccess, (state, { selectedTicket }) => ({
        ...state,
        selectedTicket
    })),
);

export function reducer(state: TicketState, action: Action): TicketState {
    return ticketReducer(state, action);
}
