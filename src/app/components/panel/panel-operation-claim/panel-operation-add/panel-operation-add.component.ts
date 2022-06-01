import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OperationClaimService } from 'src/app/services/operation-claim.service';

@Component({
  selector: 'app-panel-operation-add',
  templateUrl: './panel-operation-add.component.html',
  styleUrls: ['./panel-operation-add.component.scss']
})
export class PanelOperationAddComponent implements OnInit {

  operationClaimForm:FormGroup;
  message = "";
  constructor(private formBuilder:FormBuilder,
    private operationClaimService:OperationClaimService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.operationClaimForm = this.formBuilder.group({
      name:['',Validators.required],
      isApproved:[false]
    })
  }

  add(){
    if (this.operationClaimForm.valid) {
      const {name,isApproved} = Object.assign({},this.operationClaimForm.value);
      this.operationClaimService.add({
        id:0,
        name:name,
        isApproved:isApproved
      }).subscribe( (response) =>{
        this.message = response.message;
      })
    } else {
      this.message = 'form da eksik var !'
    }
  }
}
