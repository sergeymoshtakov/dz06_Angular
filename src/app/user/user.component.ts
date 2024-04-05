import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user : any;

  @Output() deleteUser = new EventEmitter();
  @Output() editUser = new EventEmitter();
}
