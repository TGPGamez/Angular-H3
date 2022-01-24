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
    console.log(this.input1);
    if ((this.input1 == 0 && this.input2 > 0) || (this.input2 == 0 && this.input1 > 0) || (this.input1 == this.input2)) {
      this.shape = new Square(this.input1 + this.input2);
    } else {
      this.shape = new Rectangle(this.input1, this.input2);
    }
  }
}

