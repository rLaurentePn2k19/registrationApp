import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }

  redirectHome(){
    this.userService.homeRoute();
  }

  formRoute(){
    this.userService.formRoute();
  }
}
