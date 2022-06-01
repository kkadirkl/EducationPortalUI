import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OperationClaimModel } from '../models/operationClaim/operationClaimModel';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/responseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class OperationClaimService {

  private readonly apiUrl:string = `https://localhost:44386/api/OperationClaims`;

  constructor(private httpClient:HttpClient) { }

  getOperationClaims(){
    const getListUrl = this.apiUrl + `/get-operation-claims`;
    return this.httpClient.get<ListResponseModel<OperationClaimModel>>(getListUrl);
  }

  getByOperationClaimId(operationClaimId:number){
    const getByIdUrl = this.apiUrl + `/get-by-operation-claim-id/${operationClaimId}`;
    return this.httpClient.get<SingleResponseModel<OperationClaimModel>>(getByIdUrl);
  }

  add(operationClaimModel:OperationClaimModel){    
    const addUrl = this.apiUrl + `/add`;
    return this.httpClient.post<ResponseModel>(addUrl,operationClaimModel);
  }

  update(operationClaimModel:OperationClaimModel){
    const updateUrl = this.apiUrl + `/update`;
    return this.httpClient.put<ResponseModel>(updateUrl,operationClaimModel);
  }

  delete(operationClaimModel:OperationClaimModel){    
    const deleteUrl = this.apiUrl + `/delete`;
    return this.httpClient.delete<ResponseModel>(deleteUrl,{body:operationClaimModel});
  }
}
