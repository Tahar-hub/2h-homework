import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BackendService} from './backend.service';
import {AddTicketComponent} from './components/add-ticket/add-ticket.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers';
import {EffectsModule} from '@ngrx/effects';
import {TicketsEffects} from "./reducers/ticket/ticket.effects";
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { DetailsTicketComponent } from './components/details-ticket/details-ticket.component';
import { ListTicketComponent } from './components/list-ticket/list-ticket.component';

export const matModule = [
    MatInputModule,
    MatButtonModule,
    MatCardModule
];

@NgModule({
    declarations: [AppComponent, AddTicketComponent, DetailsTicketComponent, ListTicketComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ...matModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([TicketsEffects]),
        AppRoutingModule],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
