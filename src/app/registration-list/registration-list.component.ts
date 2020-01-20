import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { account } from '../data-model/account';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {

  @Output() editedData = new EventEmitter();
  @Output() hideComponent = new EventEmitter();
  @Output() backEvent = new EventEmitter();

  displayedColumns: string[] = ['name', 'username', 'email', 'password'];
  show = false

  @Input() formData: Array<account>;

  constructor() {

  }

  ngOnInit() {

  }

  editData(data) {
    console.log(data.email + "this is data to be passed")
    this.editedData.emit(data)
    this.hideComponent.emit(this.show)
    // for (var i = 0; i < this.formData.length; i++) {
    //   if (data == this.formData[i]) {
    //     this.formData.splice(i, 1)
    //   }
    //   console.log(this.formData)
    // }
  }

  back() {
    this.backEvent.emit(!this.show)
  }
}
