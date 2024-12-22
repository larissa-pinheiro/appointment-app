import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  newAppointmentTitle: string = "";
	newAppointmentDate: Date = new Date();

  appointment: Appointment[] = []

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      const formattedDate = this.newAppointmentDate.toISOString().split('T')[0];

      let newAppointment: Appointment = {
        id: this.appointment.length + 1,
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointment.push(newAppointment);

      this.newAppointmentTitle = "";
	    this.newAppointmentDate = new Date();
    }
  }
}
