import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  showSignUp = true; // Toggle between Sign Up and Sign In
  showForgotPassword = false;
  email: string = '';
  password: string = '';

  toggleForms() {
    this.showSignUp = !this.showSignUp;
    this.showForgotPassword = false;
  }

  forgotPassword() {
    this.showForgotPassword = true;
  }

  toggleForgotPassword() {
    this.showForgotPassword = false;
  }

  // Sign Up Function
  signUp() {
    // Implement sign-up logic here (usually through an API call)
    console.log('Signing Up with:', this.email, this.password);
    alert('Sign Up successful!');
  }

  // Sign In Function
  signIn() {
    // Implement sign-in logic here (usually through an API call)
    console.log('Signing In with:', this.email, this.password);
    alert('Sign In successful!');
  }

  // Forgot Password Reset Function
  resetPassword() {
    // Implement password reset logic here (usually through an API call)
    console.log('Resetting password for:', this.email);
    alert('Password reset link sent!');
  }

  // Sign in with Google Function
  signInWithGoogle() {
    // Implement Google Sign-In logic (usually using Firebase or Google API)
    console.log('Sign in with Google');
    alert('Signing in with Google...');
  }
}
