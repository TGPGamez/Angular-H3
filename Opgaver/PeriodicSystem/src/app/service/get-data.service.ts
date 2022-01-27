import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IElement } from '../interface/ielement';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  URL: string = "https://periodic-table-elements-info.herokuapp.com/"

  constructor(private http: HttpClient) { }

  getAllData() : Observable<IElement[]> {
    return this.http.get<IElement[]>(this.URL + "elements");
  }
}
