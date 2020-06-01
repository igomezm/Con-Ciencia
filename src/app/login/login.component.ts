import { Component, OnInit } from '@angular/core';


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
  

  selectedValue: string;
  usuarios: Usuario[] = [
    
    {value: 'Participante', viewValue: 'Participante'},
    {value: 'Docente', viewValue: 'Docente'},
    {value: 'Admin', viewValue: 'Admin'},
 
  ];

  ngOnInit(): void {
  
  }

  
  }

  export class InputFormExample {}


