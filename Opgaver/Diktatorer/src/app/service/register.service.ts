import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  URL: string = "http://localhost:3000/dictators"

  constructor(private http: HttpClient) { }

  register(userData:any) {
    return this.http.post<any>(this.URL, userData)
  }
}
