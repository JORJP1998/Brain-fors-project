import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

export class UserModel {
  constructor (public id: number, 
    public first: string, 
    public last: string, 
    public email: string, 
    public age: number) {}
}
export class UserForm {
  constructor (
    public first: string, 
    public last: string, 
    public email: string, 
    public age: number) {}
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserModel[] = [];
  userForm: UserForm = new UserForm('','','', 0);

  constructor(private userService: UserService) { }

  createUser () {
    this.userService.addUser(this.userForm).subscribe((data) => {
    })
    setTimeout(() => {
      window.location.reload();
    }, 1000)
    
  }
  deleteUser (id: number) {
    this.userService.deleteUser(id).subscribe((data) => {
    })
    window.location.reload();
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe((data) => {
      this.users = data
    })
  }

}
