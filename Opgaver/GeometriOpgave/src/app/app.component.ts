import { Component } from '@angular/core';
import { Rectangle } from './Class/rectangle';
import { Shape } from './Class/shape';
import { Square } from './Class/square';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GeometriOpgave';

  input1: number = 5;
  input2: number = 5;

  shape: Shape = new Rectangle(this.input1, this.input2);
  

  inputChange(event: any) : void {    
    if ((this.input1 == 0 && this.input2 > 0) || (this.input2 == 0 && this.input1 > 0) || (this.input1 == this.input2)) {
      this.shape = new Square(this.input1 + this.input2);
      this.drawSquare();
    } else {
      this.shape = new Rectangle(this.input1, this.input2);
      this.drawRectangle();
    }
  }

  private drawRectangle() : void {
    let canvas : any = document.getElementById("shapeCanvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
  }

  private drawSquare() : void {
    let canvas : any = document.getElementById("shapeCanvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(50, 50, 80, 80);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
  }
}

