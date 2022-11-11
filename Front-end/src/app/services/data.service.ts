import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  result: any;
  token: any;
  uId: any;
  userData: any;
  public imageUrl = "http://127.0.0.1:8000/public/";
  private base_url = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) { }

  AddUser(data: any): Observable<any> {
    return this.http.post(`${this.base_url}/users`, data);
  }

  getUserData() {
    return this.http.get(`${this.base_url}/users/${this.uId}`).subscribe(res => {
      localStorage.setItem('userData', JSON.stringify(res));
    })
  }

  AuthUser(data: any) {
    return this.http.post(`http://127.0.0.1:8000/api/login`, data).pipe(map(res => {
      this.result = res;
      this.token = this.result['0'];
      this.uId = this.result['1'];
      this.result = { token: this.token, userId: this.uId }
      if (this.result) {
        localStorage.setItem('token', this.token);
        localStorage.setItem('userId', this.uId);
        this.getUserData();
        return true;
      }
      return false;
    }));
  }
}
