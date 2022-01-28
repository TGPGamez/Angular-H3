import { Component, Input, OnInit } from '@angular/core';
import { IElement } from 'src/app/interface/ielement';

@Component({
  selector: 'app-view-element',
  templateUrl: './view-element.component.html',
  styleUrls: ['./view-element.component.css']
})
export class ViewElementComponent implements OnInit {

  @Input() currentElement?: IElement;

  constructor() { }

  ngOnInit(): void {
  }

  GetColor() {
    if(this.currentElement?.cpkHexColor != "unknown") 
      return "#" + this.currentElement?.cpkHexColor;
    else return "#eee";
  }

}
