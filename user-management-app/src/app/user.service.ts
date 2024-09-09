import { Injectable } from '@angular/core';
import { User } from './user.model';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor(private loggerService: LoggerService) { }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.push(user);
    this.loggerService.log(`User added: ${user.name}`);
  }
}
