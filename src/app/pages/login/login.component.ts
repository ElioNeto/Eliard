import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  showEmail: boolean = true;
  showPassWd: boolean = false;

  constructor(private route: Router) {}

  ngOnInit(): void {}
  testEmail(): void {
    console.log(this.user.email);
    if (this.user.email === this.validUser.email) {
      console.log('ok');
      this.showEmail = false;
      this.showPassWd = true;
    } else {
      console.log('fail');
    }
  }
  testPasswd(): void {
    console.log(this.user.passwd);
    if (this.user.passwd === this.validUser.passwd) {
      console.log('ok');
      this.showEmail = false;
      this.showPassWd = true;
      this.route.navigate(['']);
    } else {
      console.log('fail');
    }
  }
  goToSignup() {
    this.route.navigate(['signup']);
  }
}
