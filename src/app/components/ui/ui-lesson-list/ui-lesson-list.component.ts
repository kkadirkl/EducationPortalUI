import { Component, OnInit } from '@angular/core';
import { LessonModel } from 'src/app/models/lessonModels/lessonModel';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-ui-lesson-list',
  templateUrl: './ui-lesson-list.component.html',
  styleUrls: ['./ui-lesson-list.component.scss']
})
export class UILessonListComponent implements OnInit {
  lessons:LessonModel[] = [];
  constructor(private lessonService:LessonService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.lessonService.getLessons().subscribe( (response) =>{
      this.lessons = response.listData;
    })
  }
}
