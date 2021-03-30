import {createFeatureSelector, createSelector, MemoizedSelector} from "@ngrx/store";
import {ticketKey, TicketState} from "./ticket.reducer";
import {Ticket} from "../../../interfaces/ticket.interface";

export const selectTicketState: MemoizedSelector<object, TicketState>
    = createFeatureSelector<TicketState>(ticketKey);

export const selectTicketsList: MemoizedSelector<object, Ticket[]>
    = createSelector(
    selectTicketState,
    (state: TicketState) => state.tickets || null);

export const selectSelectedTicket: MemoizedSelector<object, Ticket>
    = createSelector(
    selectTicketState,
    (state: TicketState) => state.selectedTicket || null);
