import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { account } from '../account';


@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {

  // @Input() formData = new Array<account>();
  @Output() editedData = new EventEmitter();
  displayedColumns: string[] = ['name', 'username','email','password'];

  @Input() formData: Array<account>;


  constructor() { }

  ngOnInit() {
    
  }

  editData(data) {
    this.editedData.emit(data)
  }
}
