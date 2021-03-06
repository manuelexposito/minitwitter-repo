import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthSignUpDto } from 'src/app/models/dto/signup-dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  submitted = false;
  hide = true;
 // signUpDto = new AuthSignUpDto(this.signUpDtoForm.value);
  signUpDtoForm = new FormGroup(
    {
      username: new FormControl(''),
      email : new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(''),
      code: new FormControl('')
    }
  );

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }



  
/*
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
*/

  //TODO: Método SIGN UP Con conversión FORMGROUP -> DTO
  signUp(){

    
    
    this.authService.signUp(this.signUpDto).subscribe(

        r => {
          this.authService.setToken(r.token);
        }

    )
    
  }
  onSubmit() { this.submitted = true; }


}
