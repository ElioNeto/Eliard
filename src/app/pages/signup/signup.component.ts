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
    passwd: '',
    email: '',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}
  createPerson(): void {
    if (!this.nameValidation()) return;
    if (!this.nicknameValidation()) return;
    if (!this.emailValidation()) return;
    if (!this.passwdValidation()) return;
    console.log('Usuário criado com sucesso!');
    console.log(this.person);
    this.router.navigate(['']);
  }
  nameValidation(): boolean {
    if (this.person.name === '' || !this.person.name) {
      console.log('É obrigatório informar o nome completo!');
      return false;
    }
    return true;
  }
  nicknameValidation(): boolean {
    if (this.person.nickname === '' || !this.person.nickname) {
      console.log('É obrigatório informar o nickname completo!');
      return false;
    }
    return true;
  }
  emailValidation(): boolean {
    if (this.person.email === '' || !this.person.email) {
      console.log('É obrigatório informar o email!');
      return false;
    }
    return true;
  }
  passwdValidation(): boolean {
    if (this.person.passwd === '' || !this.person.passwd) {
      console.log('É obrigatório informar a senha!');
      return false;
    }
    return true;
  }
  goBack(): void {
    this.router.navigate(['login']);
  }
}
