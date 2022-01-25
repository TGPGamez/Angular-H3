import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-pal',
  templateUrl: './my-pal.component.html',
  styleUrls: ['./my-pal.component.css']
})
export class MyPalComponent implements OnInit {

  @Input() path: string = "Input image";
  @Input() desc: string = "Input text here";

  constructor() { }

  ngOnInit(): void {
  }

}
