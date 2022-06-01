import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LessonModel } from '../models/lessonModels/lessonModel';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/responseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private readonly apiUrl:string = `https://localhost:44386/api/Lessons`;

  constructor(private httpClient:HttpClient) { }

  getLessons(){
    const getListUrl = this.apiUrl + `/get-lessons`;
    return this.httpClient.get<ListResponseModel<LessonModel>>(getListUrl);
  }

  getByLessonId(lessonId:number){
    const getByIdUrl = this.apiUrl + `/get-by-lesson-id/${lessonId}`;
    return this.httpClient.get<SingleResponseModel<LessonModel>>(getByIdUrl);
  }

  add(lessonModel:LessonModel){    
    const addUrl = this.apiUrl + `/add`;
    return this.httpClient.post<ResponseModel>(addUrl,lessonModel);
  }

  update(lessonModel:LessonModel){
    const updateUrl = this.apiUrl + `/update`;
    return this.httpClient.put<ResponseModel>(updateUrl,lessonModel);
  }

  delete(lessonModel:LessonModel){    
    const deleteUrl = this.apiUrl + `/delete`;
    return this.httpClient.post<ResponseModel>(deleteUrl,lessonModel);
  }
}
