import { Component, OnInit } from '@angular/core';
import { Rectangle } from '../Class/rectangle';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  A: number = 100;
  B: number = 200;

  area?: number;
  circumference?: number;
  
  constructor() 
  {
    this.onChange();
  }
  rectangle: Rectangle = new Rectangle(this.A, this.B);

  ngOnInit(): void {
  }

  onChange() : void {
    this.rectangle.A = this.A;
    this.rectangle.B = this.B;
    this.area = this.rectangle.GetArea();
    this.circumference = this.rectangle.GetCircumference();
  }
}
