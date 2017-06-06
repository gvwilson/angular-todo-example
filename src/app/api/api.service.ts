import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  BASE_URL = '//localhost:3000';

  constructor(private http: Http) { }

  get(url: string) {
    return this.http.get(`${this.BASE_URL}${url}`)
      .map(response => response.json());
  }

  post(url: string, data: any) {
    return this.http
      .post(`${this.BASE_URL}${url}`, data)
      .map(res => res.json());
  }

  put(url: string, data: any) {
    return this.http
      .put(`${this.BASE_URL}${url}`, data)
      .map(res => res.json());
  }

  delete() { }
}
