import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  registerForm:FormGroup;
  message = "";
  constructor(private authService:AuthService,private formBuilder:FormBuilder,private router:Router) { }
  

  ngOnInit(): void {
    this.createLessonForm();
  }

  createLessonForm(){
    this.registerForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  register(){
    this.authService.logout();
    if (this.registerForm.valid) {
      const {firstName,lastName,email,password} = Object.assign({},this.registerForm.value);
      this.authService.register({
        email:email,
        firstName:firstName,
        lastName:lastName,
        password:password
      }).subscribe( (response) =>{
        this.message = response.message;
        this.router.navigate(['/'])
      })
    } else {
      this.message = 'form da eksik var !'
    }
  }

}
