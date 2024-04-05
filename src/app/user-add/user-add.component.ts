import { Component, Input, OnChanges  } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnChanges{
  @Input() isSaveButtonActive: boolean = false;
  @Input() currentIndex: number = -1;
  name: string = '';
  age: number = 20;

  constructor(public userService: UsersService) { }

  ngOnChanges() {
    if (this.currentIndex !== -1) {
      const user : any = this.userService.getUser(this.currentIndex);
      this.name = user.name;
      this.age = user.age;
    } else {
      this.name = '';
      this.age = 20;
    }
  }

  addUser() {
    this.userService.addUser(this.name, this.age);
    this.clearFields();
  }

  saveUser() {
    this.userService.editUser(this.currentIndex, this.name, this.age);
    this.clearFields();
    this.isSaveButtonActive = !this.isSaveButtonActive;
    this.currentIndex = -1;
  }

  clearFields() {
    this.name = '';
    this.age = 20;
  }
}
