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

  displayedColumns: string[] = ['name', 'username', 'email', 'password'];
  show = false

  @Input() formData: Array<account>;

  constructor(
    private userService: UserServiceService
  ) {
  }

  ngOnInit() {
  }

  editData(data) {
    Swal.fire({
      title: 'Delete or Edit?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'Edit',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.value) {
        this.deleteData(data)
        Swal.fire(
          'Delete',
          'Account has been deleted.',
          'success'
        )
      } else {
        this.editedData.emit(data)
        this.hideComponent.emit(this.show)
      }
    })
  }

  deleteData(data) {
    console.log(data)
    this.userService.deleteUser(data.id).subscribe(deleteData => {
      console.log(deleteData)
      this.formData.splice(this.formData.indexOf(data), 1)
    })
  }

  back() {
    this.backEvent.emit(!this.show)
  }
}
