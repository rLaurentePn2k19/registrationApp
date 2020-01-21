import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { account } from '../data-model/account'
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public url: string = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }

  getUser(): Observable<account[]> {
    return this.http.get<account[]>(`${this.url}`);
  }

  addUser(account: account): Observable<any> {
    return this.http.post<account>(`${this.url}`, account, httpOptions);
  }
  
  updateUser(id: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, httpOptions)
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`,httpOptions)
  }
}
