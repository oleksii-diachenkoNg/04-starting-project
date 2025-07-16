import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { type Ticket } from './tickets.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Array<Ticket> = [];
 
  addTicket(ticket: {title: string, description: string}) { 
    const id = this.tickets.length + 1;
    this.tickets.push({
      id: id.toString(),
      title: ticket.title,
      description: ticket.description,
      status: 'open'
    });
  }

  onCloseTicket(id: string) { 
    this.tickets = this.tickets.map(ticket => { 
      if (ticket.id === id) {
        return {
          ...ticket,
          status: 'closed'
        }
      }
      return ticket;
    })
  }
}
