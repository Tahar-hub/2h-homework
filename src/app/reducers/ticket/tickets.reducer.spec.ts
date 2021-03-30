import * as fromReducer from './ticket.reducer';
import * as  TicketActions from './ticket.actions'

describe('Ticket Reducer', () => {
    const currentState = {
        ...fromReducer.initialState,
        descriptionNewTicket: 'descriptionNewTicket',
        tickets: [],
        selectedTicket: {id: 1, description: 'description', completed: false, assigneeId: 111}
    };

    it('should be reducer function', () => expect(typeof fromReducer.reducer).toBe('function'));

    it('should return updated state for create new ticket', () => {
        const expectedState = {
            ...currentState,
            descriptionNewTicket: 'test OK'
        };

        const action = TicketActions.createTicket({ descriptionNewTicket: 'test OK' });
        const state = fromReducer.reducer({ ...currentState }, action);

        expect(state).toEqual(expectedState);
    });
});