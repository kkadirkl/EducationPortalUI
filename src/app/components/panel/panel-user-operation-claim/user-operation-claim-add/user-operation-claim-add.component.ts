import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OperationClaimModel } from 'src/app/models/operationClaim/operationClaimModel';
import { UserModel } from 'src/app/models/userModels/userModel';
import { OperationClaimService } from 'src/app/services/operation-claim.service';
import { UserOperationClaimService } from 'src/app/services/user-operation-claim.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-operation-claim-add',
  templateUrl: './user-operation-claim-add.component.html',
  styleUrls: ['./user-operation-claim-add.component.scss']
})
export class UserOperationClaimAddComponent implements OnInit {

  uOClaimForm:FormGroup;
  message = "";
  users:UserModel[] = [];
  operationClaims:OperationClaimModel[] = [];
  constructor(private userOperationClaimService:UserOperationClaimService,
    private formBuilder:FormBuilder,
    private userService:UserService,
    private operationClaimService:OperationClaimService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getOperationClaims();
    this.createForm();
  }

  createForm(){
    this.uOClaimForm = this.formBuilder.group({
        userId: ['',Validators.required],
        operationClaimId: ['',Validators.required],
        isApproved: [false]
    })
  }

  getUsers(){
    this.userService.getAll().subscribe( (response) => {
      this.users = response.listData;
    })
  }

  getOperationClaims(){
    this.operationClaimService.getOperationClaims().subscribe( (response) => {
      this.operationClaims = response.listData;
    })
  }
  
  add(){
    if (this.uOClaimForm.valid) {
      const {userId,operationClaimId,isApproved} = Object.assign({},this.uOClaimForm.value);
      this.userOperationClaimService.add({
        id:0,
        userId:userId,
        operationClaimId :operationClaimId,
        isApproved:isApproved
      }).subscribe( (response) =>{
        this.message = response.message;
      })
    } else {
      this.message = 'form da eksik var !'
    }
  }
}
