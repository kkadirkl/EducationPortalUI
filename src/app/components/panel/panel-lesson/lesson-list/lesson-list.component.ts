import { Component, OnInit } from '@angular/core';
import { LessonModel } from 'src/app/models/lessonModels/lessonModel';
import { AuthService } from 'src/app/services/auth.service';
import { LessonService } from 'src/app/services/lesson.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit {

  lessons:LessonModel[] = [];
  message:string = '';
  isAdmin:boolean = false;
  constructor(private lessonService:LessonService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.getAll();
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.authService.currentUser.subscribe( (response) =>{
      if (response.userEmail === environment.adminEmail) {
        this.isAdmin = true;
      }
    })
  }

  getAll(){
    this.lessonService.getLessons().subscribe( (response) =>{
      this.lessons = response.listData;
    })
  }

  delete(selectLesson:LessonModel){
    this.lessonService.delete(selectLesson).subscribe( (response) =>{
      this.message = response.message;
      this.getAll();
    })
  }
}
