import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson-add',
  templateUrl: './lesson-add.component.html',
  styleUrls: ['./lesson-add.component.scss']
})
export class LessonAddComponent implements OnInit {

  lessonForm:FormGroup;
  message = "";
  constructor(private formBuilder:FormBuilder,
    private lessonService:LessonService) { }

  ngOnInit(): void {
    this.createLessonForm();
  }

  createLessonForm(){
    this.lessonForm = this.formBuilder.group({
      name:['',Validators.required],
      isApproved:[false,Validators.nullValidator]
    })
  }

  add(){
    if (this.lessonForm.valid) {
      const {name,isApproved} = Object.assign({},this.lessonForm.value);
      this.lessonService.add({
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
