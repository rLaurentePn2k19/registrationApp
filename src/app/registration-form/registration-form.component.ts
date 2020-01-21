import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { account } from '../data-model/account'
import Swal from 'sweetalert2';
import { UserServiceService } from '../services/user-service.service';


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

  public list_data = new Array<account>();

  constructor
    (
    private fb: FormBuilder,
    private userService: UserServiceService
    ) { }


  ngOnInit() {
    this.dataToEdit(new account())
    this.userService.getUser()
      .subscribe(data => {
        this.list_data = data
        console.log(this.list_data)
      })
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
      this.list_data.forEach(element => {
        if (element.id == this.userInformation.value.id) {
          this.userService.updateUser(this.userInformation.value.id).subscribe(data => {
            console.log(data)
          })
          this.list_data.forEach(element => {
            if (element.id == this.userInformation.value.id) {
              element.email = this.userInformation.value.email
              element.name = this.userInformation.value.name
              element.phone = this.userInformation.value.phone
            }
          });
          console.log(this.list_data)
        }
      });
      // this.info.forEach(element => {
      //   if (element.id == this.userInformation.value.id) {
      // element.email = this.userInformation.value.email
      // element.name = this.userInformation.value.name
      // // element.username = this.userInformation.value.username
      // // element.password = this.userInformation.value.password
      // element.phone = this.userInformation.value.phone
      //   }
      // });
      this.edit = true
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Information added.',
        showConfirmButton: false,
        timer: 1500
      })
      this.userService.addUser(this.userInformation.value).subscribe(data => {
        // data.id = + this.list_data.length + 1
        data.id =+ this.list_data.length + 1
        this.list_data.push(data)
        console.log(this.list_data)
      })
    }
    form.form.reset();
  }

  clear(form) {
    form.form.reset();
  }

  dataToEdit(data) {
    this.userInformation = this.fb.group({
      id: [data.id],
      name: [data.name, Validators.required],
      // username: [data.username, Validators.required],
      email: [data.email, [Validators.required, Validators.pattern(this.emailPattern)]],
      // password: [data.password, [Validators.required, Validators.pattern(this.passwordPattern)]]
      phone: [data.phone, Validators.required]
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
