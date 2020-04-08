import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // reactive design
  @ViewChild('f') signupForm: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // template driven design
  // onSubmit(form: NgForm) {
  //   console.log('Submitted!');
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }
}
