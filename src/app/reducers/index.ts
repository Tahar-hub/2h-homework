import {
  ActionReducerMap,
} from '@ngrx/store';
import * as fromTicket from './ticket/ticket.reducer';

export interface State {
  [fromTicket.ticketKey]: fromTicket.TicketState;
}

export const reducers: ActionReducerMap<State> = {
  [fromTicket.ticketKey]: fromTicket.reducer,
};
