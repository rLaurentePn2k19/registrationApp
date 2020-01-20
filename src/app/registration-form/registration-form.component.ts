import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { account } from '../data-model/account'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  public emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  public passwordPattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
  public dangerColor = "red"
  public successColor = "green"
  public saveEdit = false
  userInformation: FormGroup
  width = "15rem"
  show = false
  btn = false
  edit = false
  photo = 'https://data.whicdn.com/images/281869398/original.jpg';

  public info = new Array<account>();

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.dataToEdit(new account())
  }

  onSubmit(form) {
    this.show = !this.show;
    if (!this.edit) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Information saved!.',
        showConfirmButton: false,
        timer: 1500
      })
      this.info.forEach(element => {
        if (element.id == this.userInformation.value.id) {
          element.email = this.userInformation.value.email
          element.fullname = this.userInformation.value.fullname
          element.username = this.userInformation.value.username
          element.password = this.userInformation.value.password
        }
      });
      this.edit = true
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Information added.',
        showConfirmButton: false,
        timer: 1500
      })
      this.userInformation.value.id = this.info.length + 1
      this.info.push(this.userInformation.value)

    }
    form.form.reset();
  }

  dataToEdit(data) {
    this.userInformation = this.fb.group({
      id: [data.id],
      fullname: [data.fullname, Validators.required],
      username: [data.username, Validators.required],
      email: [data.email, [Validators.required, Validators.pattern(this.emailPattern)]],
      password: [data.password, [Validators.required, Validators.pattern(this.passwordPattern)]]
    })
    this.edit = !this.edit
  }

  hide(show) {
    this.show = show
    this.btn = !show
  }

  back(event) {
    this.show = !event
    this.btn = !true
  }

}
