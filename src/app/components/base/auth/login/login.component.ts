import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router,    
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    if (this.loginForm.valid) {
      const {email,password} = Object.assign({},this.loginForm.value);
      this.authService.login({email:email,password:password}).subscribe( (response) => {
        const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/panel';
        this.router.navigate([returnUrl]);
      })
    }
    else{
      console.log("Hata!");
      console.log(this.loginForm.controls);
    }
  }

}
