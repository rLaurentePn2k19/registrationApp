import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  public userInformation: FormGroup;
  public emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  public passwordPattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
  private fb = new FormBuilder();


  @Output() onClick = new EventEmitter();

  // constructor(private fb : FormBuilder) {

  // }
  constructor() { }


  // constructor() {
  // }

  ngOnInit() {
    this.userInformation = this.fb.group({
      fullname: ['', Validators.required],
      age: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]]
    })
  }
  onSubmit() {
    console.log("test")
    this.onClick.emit(this.userInformation)
  }

}
