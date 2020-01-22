import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { account } from '../data-model/account';
import Swal from 'sweetalert2';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {

  @Output() editedData = new EventEmitter();
  @Output() hideComponent = new EventEmitter();
  @Output() backEvent = new EventEmitter();
  @Output() testEvent = new EventEmitter();

  displayedColumns: string[] = ['name', 'username', 'email', 'password'];
  show = false

  @Input() formData: Array<account>;

  constructor(
    private userService: UserServiceService
  ) {
  }

  ngOnInit() {
  }

  delData(data) {
    Swal.fire({
      title: 'You want to delete it?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'Cancel',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.value) {
        this.deleteData(data)
        Swal.fire(
          'Deleted!',
          'Account has been deleted.',
          'success'
        )
      }
    })
  }

  editData(data) {
    this.editedData.emit(data)
    console.log(data)
    this.hideComponent.emit(this.show)
  }


  deleteData(data) {
    console.log(data)
    this.userService.deleteUser(data.id).subscribe(deleteData => {
      this.formData.splice(this.formData.indexOf(data), 1)
      console.log(this.formData)
    })
  }

  back() {
    this.backEvent.emit(!this.show)
  }

  viewData(id) {
    console.log(id)
    this.userService.viewRoute(id)
  }

}
