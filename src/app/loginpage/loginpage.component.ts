import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent {
  loginForm: FormGroup;
  signupForm:FormGroup
  loginButtonClicked = false; // Track whether the login button is clicked

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]], // Added Validators.minLength(8)
    });

    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phonenumber: ['']
    });
    
  }

  login() {
    this.loginButtonClicked = true; // Set loginButtonClicked to true when login is attempted
    if (this.loginForm.valid) {
      console.log('Login form submitted');
      // Add your login logic here
    }
  }

  showSignupModal() {
    const modal = document.getElementById('signup-modal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  // Function to hide the signup modal
  hideSignupModal() {
    const modal = document.getElementById('signup-modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }



}
