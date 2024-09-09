import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrl: './user-entry.component.css'
})
export class UserEntryComponent {
  user: User = {
    id: 0,
    name: '',
    email: '',
    mobile: ''
  };

  emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Regex pattern for email validation
  mobilePattern = /^[0-9]{10}$/;               // Regex pattern for 10-digit mobile number

  constructor(private userService: UserService) { }

  addUser(form: NgForm): void {
    if (form.valid) {
      this.user.id = Date.now(); // Simple unique ID
      this.userService.addUser(this.user);
      form.resetForm();
    }
  }
}
