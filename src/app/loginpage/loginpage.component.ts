import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent {
  loginForm: FormGroup;
  loginButtonClicked = false; // Track whether the login button is clicked

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.loginButtonClicked = true; // Set loginButtonClicked to true when login is attempted
    if (this.loginForm.valid) {
      console.log('Login form submitted');
      // Add your login logic here
    }
  }
}
