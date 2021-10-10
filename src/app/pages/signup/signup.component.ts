import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonModel } from 'src/app/models/personModel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
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
    this.router.navigate(['login']);
  }
  create(): void {
    if (!this.validName()) return;
    if (!this.validNickname()) return;
    if (!this.validEmail()) return;
    if (!this.validPasswd()) return;

    console.log('sucesso!');
    console.log(this.person);
    this.router.navigate(['']);
  }
}
