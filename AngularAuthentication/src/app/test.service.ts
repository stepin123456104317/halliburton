import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private http: HttpClient
  ) { }

  localUrl = 'https://jsonplaceholder.typicode.com/posts';

  getData(){
    return this.http.get(this.localUrl);
  }
}
