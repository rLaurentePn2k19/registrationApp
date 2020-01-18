import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { account } from '../account'

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

  show = false


  public info = new Array<account>();

  constructor(private fb: FormBuilder) {

  }

  userInformation: FormGroup = this.fb.group({
    fullname: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]]
  })

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.userInformation.value)
    this.info.push(this.userInformation.value)
  }

  dataToEdit(data) {

  }

  saveEditData() {


  }
}
