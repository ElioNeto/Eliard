import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonModel } from 'src/app/models/personModel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [
    trigger('anim', [
      state('created', style({ opacity: 1, transform: 'translate(0, 0)' })),
      transition('void => created', [
        style({ opacity: 0, transform: 'translate(0, +100px)' }),
        animate('500ms ease-in-out'),
      ]),
      state('up', style({ opacity: 0, transform: 'translate(0, +100px)' })),
      transition('created => up', [
        style({ opacity: 1, transform: 'translate(0, 0)' }),
        animate('500ms ease-in-out'),
      ]),
    ]),
  ],
})
export class SignupComponent implements OnInit {
  public state: string = 'created';

  person: PersonModel = {
    name: '',
    nickname: '',
    email: '',
    passwd: '',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  validName(): boolean {
    if (!this.person.name || this.person.name === '') {
      console.log('nome não informado');
      return false;
    }

    return true;
  }

  validNickname(): boolean {
    if (!this.person.nickname || this.person.nickname === '') {
      console.log('nickname não informado');
      return false;
    }

    return true;
  }

  validPasswd(): boolean {
    if (!this.person.passwd || this.person.passwd === '') {
      console.log('passwd não informado');
      return false;
    }

    return true;
  }

  validEmail() {
    if (!this.person.email || this.person.email === '') {
      console.log('email não informado');
      return false;
    }

    return true;
  }

  goBack(): void {
    this.state = 'up';

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 500);
  }

  create(): void {
    if (!this.validName()) return;
    if (!this.validNickname()) return;
    if (!this.validEmail()) return;
    if (!this.validPasswd()) return;

    console.log('sucesso!');
    console.log(this.person);

    this.router.navigate(['/']);
  }
}
