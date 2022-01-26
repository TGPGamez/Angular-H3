import { Component, OnInit } from '@angular/core';
import { IDictator } from '../interface/idictator';
import { DictatorService } from '../service/dictator.service';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {

  dictators: IDictator[] = [];

  constructor(private dicService: DictatorService) { }

  ngOnInit(): void {
    this.dicService.getDictators().subscribe((data: IDictator[]) => {
      next: this.dictators = data;
    });
  }

  DeleteDictator(input: number) {
    this.dicService.deleteDictator(input).subscribe(() => {
    });
    window.location.reload();
  }
}
