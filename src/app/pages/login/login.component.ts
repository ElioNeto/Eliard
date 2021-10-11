import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/userModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('centerToLeft', [
      state('created', style({ opacity: 1, transform: 'translate(0,0 )' })),
      transition('void => created', [
        style({ opacity: 0, transform: 'translate(0, -100px)' }),
        animate('500ms ease-in-out'),
      ]),
      state(
        'destroyed',
        style({ opacity: 0, transform: 'translate(-500px, 0)' })
      ),
      transition('created => destroyed', [
        style({ opacity: 1, transform: 'translate(0, 0)' }),
        animate('500ms ease-in-out'),
      ]),
      transition('createdLeft => destroyed', [
        style({ opacity: 1, transform: 'translate(0, 0)' }),
        animate('500ms ease-in-out'),
      ]),
      state('createdLeft', style({ opacity: 1, transform: 'translate(0, 0)' })),
      transition('void => createdLeft', [
        style({ opacity: 0, transform: 'translate(-500px, 0)' }),
        animate('500ms ease-in-out'),
      ]),
      state('up', style({ opacity: 0, transform: 'translate(0, -100px)' })),
      transition('created => up', [
        style({ opacity: 1, transform: 'translate(0, 0)' }),
        animate('500ms ease-in-out'),
      ]),
      transition('createdLeft => up', [
        style({ opacity: 1, transform: 'translate(0, 0)' }),
        animate('500ms ease-in-out'),
      ]),
    ]),
    trigger('rightToCenter', [
      state('created', style({ opacity: 1, transform: 'translate(0, 0)' })),
      transition('void => created', [
        style({ opacity: 0, transform: 'translate(+500px, 0)' }),
        animate('500ms ease-in-out'),
      ]),
      state('up', style({ opacity: 0, transform: 'translate(0, -100px)' })),
      transition('created => up', [
        style({ opacity: 1, transform: 'translate(0, 0)' }),
        animate('500ms ease-in-out'),
      ]),
      state(
        'destroyed',
        style({ opacity: 0, transform: 'translate(+500px, 0)' })
      ),
      transition('created => destroyed', [
        style({ opacity: 1, transform: 'translate(0, 0)' }),
        animate('500ms ease-in-out'),
      ]),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  public emailState: string = 'created';
  public passwdState: string = '';

  public user: UserModel = {
    email: '',
  };

  public validUser: UserModel = {
    email: 'test@test.com',
    passwd: 'passwd',
  };

  public showEmail: boolean = true;
  public showPassWd: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  testEmail(): void {
    console.log(this.user.email);

    if (this.user.email === this.validUser.email) {
      console.log('ok');

      this.passwdState = 'created';
      this.emailState = 'destroyed';

      setTimeout(() => {
        this.showEmail = false;
        this.showPassWd = true;
      }, 500);
    } else {
      console.log('fail');
    }
  }

  testPasswd(): void {
    console.log(this.user.passwd);

    if (this.user.passwd === this.validUser.passwd) {
      console.log('ok');

      this.router.navigate(['/']);
    } else {
      console.log('fail');
    }
  }

  goToSignup() {
    this.emailState = 'up';
    this.passwdState = 'up';

    setTimeout(() => {
      this.router.navigate(['/signup']);
    }, 500);
  }

  goToLoginStep() {
    this.emailState = 'createdLeft';
    this.passwdState = 'destroyed';

    setTimeout(() => {
      this.showEmail = true;
      this.showPassWd = false;
    }, 500);
  }
}
