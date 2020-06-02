import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { User } from '../model/user';
import {UserService} from '../service/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


interface Usuario {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  public user: User;
  keyUser = '&I%U%$234';
  public loading=false;

  selectedValue: string;
  usuarios: Usuario[] = [
    
    {value: 'Participante', viewValue: 'Participante'},
    {value: 'Docente', viewValue: 'Docente'},
    {value: 'Admin', viewValue: 'Admin'},
 
  ];

  constructor(private _snackBar: MatSnackBar,private userService: UserService, private router: Router){
    this.user={

    fullname: null,
    iduser: null,
    username: null,
    password: null,
    telefono: null,
    email: null,
  }
}

  ngOnInit(): void {

  }

  isValid(){

    let result = true;

    if (this.user.email === null || this.user.email.length === 0 ){
       result = false;
    }

    if (this.user.password === null || this.user.password.length === 0){
      result = false;
    }

    return result;
  }

  login(){
      this.loading = true;
      this.userService.loginUser(this.user).subscribe(
        user => {
          if (user === null) {
            this.openSnackBar('Verifica tu usuario o contraseña', 'Retry');
          } else {

            this.openSnackBar('Bienvenido', this.user.username);
            this.router.navigate(['/profile']);
          }
          this.user.username = '';
          this.user.password = '';
        }
      );

    }
openSnackBar(message: string, action: string) {
this._snackBar.open(message, action, {
  duration: 5000,
});
}
direction(){
this.router.navigate(['/register']);
}


  
  }
