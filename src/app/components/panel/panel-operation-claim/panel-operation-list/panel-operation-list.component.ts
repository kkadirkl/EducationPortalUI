import { Component, OnInit } from '@angular/core';
import { OperationClaimModel } from 'src/app/models/operationClaim/operationClaimModel';
import { OperationClaimService } from 'src/app/services/operation-claim.service';

@Component({
  selector: 'app-panel-operation-list',
  templateUrl: './panel-operation-list.component.html',
  styleUrls: ['./panel-operation-list.component.scss']
})
export class PanelOperationListComponent implements OnInit {
  operationClaims:OperationClaimModel[] = [];
  message:string = ''; 
  constructor(private operationClaimService:OperationClaimService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.operationClaimService.getOperationClaims().subscribe( (response) =>{
      this.operationClaims = response.listData; 
    })
  }

  delete(operationClaim:OperationClaimModel){
    this.operationClaimService.delete(operationClaim).subscribe( (response) =>{
      this.message = response.message;
      this.getAll();
    })
  }
}
