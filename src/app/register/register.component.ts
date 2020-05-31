import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  selectedValue: string;
  foods: Food[] = [
    {value: 'Bogota', viewValue: 'Bogota'},
    {value: 'Cartagena', viewValue: 'Cartagena'},
    {value: 'Medellin', viewValue: 'Medellin'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
