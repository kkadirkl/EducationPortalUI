import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-panel-header',
  templateUrl: './panel-header.component.html',
  styleUrls: ['./panel-header.component.scss']
})
export class PanelHeaderComponent implements OnInit {

  email:string = "";
  expiration:Date;
  isAdmin:boolean = false;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.authService.currentUser.subscribe( (response) =>{
      this.email = response.userEmail;
      this.expiration = response.expiration;
      if (response.userEmail === environment.adminEmail) {
        this.isAdmin = true;
      }
    })
  }

}
