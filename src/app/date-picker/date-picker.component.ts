import {Component} from '@angular/core';

/** @title Datepicker inline calendar example */
@Component({
  selector: 'datepicker-inline-calendar-example',
  templateUrl: 'date-picker.component.html',
  styleUrls: ['date-picker.component.scss'],
})
export class DatePickerComponent {
  selected: Date | null;
}