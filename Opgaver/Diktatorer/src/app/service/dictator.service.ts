import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDictator } from '../interface/idictator';

@Injectable({
  providedIn: 'root'
})
export class DictatorService {

  URL: string = "http://localhost:3000/"; 

  constructor(private http: HttpClient) { }


  getDictators() : Observable<IDictator[]> {
    return this.http.get<IDictator[]>(this.URL + "list_dictators");
  }

  postDictator(userdata: any) {
    return this.http.post<any>(this.URL + "post_dictator", userdata);
  }

  deleteDictator(index: number) {
    return this.http.delete<any>(this.URL + "delete_dictator/?ids=" + index);
  }
}
