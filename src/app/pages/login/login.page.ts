import { Component, OnInit } from '@angular/core';
import {  FormGroup,
    FormControl,
    Validators,
    FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formularioLogin = this.fb.group({
      nombreP: new FormControl('',Validators.required),
      nombreH: new FormControl('',Validators.required),
      usuario: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });
   }

  ngOnInit() {
  }

}
