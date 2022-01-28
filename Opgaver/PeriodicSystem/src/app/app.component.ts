import { Component } from '@angular/core';
import { IElement } from './interface/ielement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PeriodicSystem';

  currentSelectedElement?: IElement;

  ShowElement(element: IElement) {
    this.currentSelectedElement = element;
  }
}
