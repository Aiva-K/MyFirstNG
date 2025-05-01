import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from '../interfaces/students';

@Component({
  selector: 'app-students',
  imports: [CommonModule],
  providers: [HttpClient],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit {

  studentURL: string = "http://localhost:4000/students"
  localStudentsArray:Students[] = [];
  constructor(private http:HttpClient){

  }
  
  ngOnInit(): void {
      console.log("Page has loaded");
      // When doing a get command make sure to give the shape like Students, which you can find in students.ts AND make sure to show that its inside an array by typing [] next to it.
      this.http.get<Students[]>(this.studentURL).subscribe(student =>{
        
        this.localStudentsArray = student;
        console.log('Students Local Array', this.localStudentsArray)
        
      });
  }

}
