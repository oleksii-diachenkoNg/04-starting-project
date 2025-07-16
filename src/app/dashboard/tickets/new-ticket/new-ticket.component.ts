import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @Output() add = new EventEmitter<{ title: string, description: string }>();
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;


  onSubmit(title: string, description: string) { 
    this.add.emit({title, description})
    this.form?.nativeElement.reset();
  }
}
