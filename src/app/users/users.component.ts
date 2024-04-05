import { Component } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: any[] = [];
  currentIndex : number = -1;
  isSaveButtonActive : boolean = false;

  constructor(private userService : UsersService){}

  ngOnInit() : void{
    this.users = this.userService.users;
  }

  deleteUser(index : number){
    this.userService.deleteUser(index);
  }

  editUser(index : number){
    this.currentIndex = index;
    this.isSaveButtonActive = !this.isSaveButtonActive;
  }
}
