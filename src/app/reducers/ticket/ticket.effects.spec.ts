import {Observable} from 'rxjs';
import {TicketsEffects} from './ticket.effects';
import {provideMockStore} from '@ngrx/store/testing';
import {BackendService} from '../../backend.service';
import {provideMockActions} from '@ngrx/effects/testing';
import {TestBed} from '@angular/core/testing';
import {Actions} from '@ngrx/effects';
import * as TicketAction from './ticket.actions';
import {cold, hot} from 'jest-marbles';
import {Ticket} from "../../../interfaces/ticket.interface";

describe('TicketsEffects', () => {
    let actions$: Observable<any>;
    let effects: TicketsEffects;
    let backServiceMock;

    beforeEach(() => {
        backServiceMock = {
            tickets: jest.fn()
        };
        TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [
                TicketsEffects,
                provideMockActions(() => actions$),
                provideMockStore(),
                {
                    provide: BackendService,
                    useValue: backServiceMock,
                },
            ],
        });
        actions$ = TestBed.inject(Actions);
        effects = TestBed.inject<TicketsEffects>(TicketsEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });

    it('should return loadTicketSuccess', () => {
        let mockTicketsList : Ticket[] = [
            {id:1, description: '1', completed: false, assigneeId: 111},
            {id:2, description: '2', completed: false, assigneeId: 111}
            ]
        const action = TicketAction.loadTickets;
        const resultAction = TicketAction.loadTicketsSuccess({ tickets: mockTicketsList });

        actions$ = hot('-a', { a: action });
        backServiceMock.tickets.mockReturnValue(cold('(b|)', { b: mockTicketsList }));

        const expected$ = cold('-c', { c: resultAction });
        const effect$ = effects.loadTickets$;

        expect(effect$).toBeObservable(expected$);
        expect(effect$).toSatisfyOnFlush(() => {
            expect(backServiceMock.tickets).toHaveBeenCalled();
        });
    });
});