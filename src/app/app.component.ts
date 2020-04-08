import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // reactive design
  @ViewChild('f', {static: false}) signupForm: NgForm;
  defaultDropdown = 'pet';
  answer = '';
  genders = ['male', 'female'];
  defaultGender = 'non-binary';
  user = {
    username: '',
    mail: '',
    secret: {
      question: '',
      answer: '',
    },
    gender: ''
  }
  isFormSubmitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // console.log(Object.keys(this.signupForm.value))
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // });
    this.signupForm.form.patchValue({userData: { username: suggestedName}})
  }

  // template driven design
  // onSubmit(form: NgForm) {
  //   console.log('Submitted!');
  //   console.log(form);
  // }

  // reactive design approach
  // onSubmit() {
  //   console.log(this.signupForm);
  // }

  onSubmit() {
    this.isFormSubmitted = true;

    this.user.username = this.signupForm.value.userData.username;
    this.user.mail = this.signupForm.value.userData.email;
    this.user.secret.question =  this.signupForm.value.secret;
    this.user.secret.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
