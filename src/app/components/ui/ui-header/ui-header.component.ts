import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ui-header',
  templateUrl: './ui-header.component.html',
  styleUrls: ['./ui-header.component.scss']
})
export class UIHeaderComponent implements OnInit {

  isActive:boolean = false;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn();
  }

  isLoggedIn(){
    let user = this.authService.currentUserValue;
    if (user && user.token) {
      this.isActive = true;
    } else {      
      this.isActive = false;
    }
  }
}
