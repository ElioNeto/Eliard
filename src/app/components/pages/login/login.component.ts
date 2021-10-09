import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/userModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: UserModel = {
    email: '',
  };

  validUser: UserModel = {
    email: 'test@test.com',
    passwd: 'passwd',
  };
  constructor() {}

  ngOnInit(): void {}
  testEmail(): boolean {
    console.log(this.user.email);
    if (this.user.email === this.validUser.email) {
      return true;
    } else {
      return false;
    }
  }
}
