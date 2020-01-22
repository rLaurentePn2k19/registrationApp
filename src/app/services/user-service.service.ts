import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { account } from '../data-model/account'
import { Observable } from 'rxjs';

import { Router } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public url: string = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient,
    private router: Router) { }

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
    return this.http.delete<any>(`${this.url}/${id}`, httpOptions)
  }

  homeRoute() {
    this.router.navigateByUrl('/');
  }

  formRoute(){
    this.router.navigateByUrl('/form')
  }

  viewRoute(userId){
    this.router.navigateByUrl(`/view/${userId}`)
  }

  back(){
    this.router.navigateByUrl('/form')
  }

}
