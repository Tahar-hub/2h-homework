import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

import {Ticket} from '../interfaces/ticket.interface';
import {User} from '../interfaces/user.interface';
import {BackendService} from './backend.service';
import {map} from "rxjs/operators";
import {selectTicketsList} from "./reducers/ticket/ticket.selectors";
import {Store} from "@ngrx/store";
import {State} from "./reducers";
import {loadTickets} from "./reducers/ticket/ticket.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // public readonly users$: Observable<User[]> = this.backendService.users();
}
