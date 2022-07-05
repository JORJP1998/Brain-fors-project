import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  request_url = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  getUser (): Observable<any> {
    return this.http.get(this.request_url);
  }
  addUser (data:any) {
    return this.http.post(this.request_url, data)
  }
  deleteUser (id: number) {
    return this.http.delete(this.request_url + '/' +id)
  }
}
