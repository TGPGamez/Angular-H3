import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IElement } from '../../interface/ielement';
import { GetDataService } from '../../service/get-data.service';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css']
})
export class PeriodicTableComponent implements OnInit {

  @Output() newElementEvent = new EventEmitter<IElement>();

  currentSelectedElement?: IElement;
  elements: IElement[] = [];

  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.getDataService.getAllData().subscribe((data: IElement[]) => {
      next: this.elements = data;
      next: this.elements[4].period = 2;
      complete: this.currentSelectedElement = this.elements[0];
    });
  }

  CheckNumber(input: number) {
    if ((input >= 57 && input <= 71) || (input >= 89 && input <= 103)) return false;
    return true;
  }

  GetColor(color?: string) {
    if(color != "unknown") return "#" + color;
    else return "#eee";
  }

  OnClick(element: IElement) {

  }
}
