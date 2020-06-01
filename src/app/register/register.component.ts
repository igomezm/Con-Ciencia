import { Component, OnInit, ElementRef, Self, Optional } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { User } from '../model/user';


interface Ciudad {
  value: string;
  viewValue: string;
}
export class MyTel {
  constructor(public area: string, public exchange: string, public subscriber: string) {}
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  public user: User;


  selectedValue: string;
  ciudades: Ciudad[] = [
    {value: 'Bogota', viewValue: 'Bogota'},
    {value: 'Bucarmanga', viewValue: 'Bucaramanga'},
    {value: 'Cartagena', viewValue: 'Cartagena'},
    {value: 'Medellin', viewValue: 'Medellin'}
  ];

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

/*phone*/


  ngOnInit(): void {
  }

}






