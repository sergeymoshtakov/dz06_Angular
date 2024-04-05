import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [
    {
      id : 1,
      name : 'Oleg',
      age : 22,
    },
    {
      id : 2,
      name : 'Petr',
      age : 25,
    },
    {
      id : 3,
      name : 'Andrew',
      age : 20,
    }
  ];

  addUser(name : string, age : number){
    const id = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
    this.users.push({
      name : name, 
      age : age,
      id : id
    });
  }

  editUser(id : number, newName : string, newAge : number){
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index].name = newName;
      this.users[index].age = newAge;
    }
  }

  deleteUser(id : number){
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  getUser(index : number){
    return this.users.find(user => user.id === index);
  }
}
