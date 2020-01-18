import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { account } from '../account';


@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {

  @Output() editedData = new EventEmitter();
  displayedColumns: string[] = ['name', 'username', 'email', 'password'];

  @Input() formData: Array<account>;


  constructor() { }

  ngOnInit() {

  }

  editData(data) {
    this.editedData.emit(data)
    for (var i = 0; i < this.formData.length; i++) {
      if (data == this.formData[i]) {
        this.formData.splice(i, i + 1)
      }
      console.log(this.formData)
    }
  }
}
