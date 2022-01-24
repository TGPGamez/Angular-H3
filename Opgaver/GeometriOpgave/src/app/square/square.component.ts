import { Component, OnInit } from '@angular/core';
import { Square } from '../Class/square';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  A: number = 100;

  area?: number;
  circumference?: number;

  constructor() 
  { 
    this.onChange();
  }

  rectangle: Square = new Square(this.A);

  ngOnInit(): void {
  }

  onChange() : void {
    this.rectangle.A = this.A;
    this.area = this.rectangle.GetArea();
    this.circumference = this.rectangle.GetCircumference();
  }

}
