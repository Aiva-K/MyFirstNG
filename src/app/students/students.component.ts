import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  students:any[] = [

    {
      id: 1,
      Name: 'Peter Parker',
      Country: 'USA',
      Age: 33
    },

    {
      id: 2,
      Name: 'Mary Poppins',
      Country: 'Canada',
      Age: 25
    },

    {
      id: 3,
      Name: 'Bruce Wayne',
      Country: 'UK',
      Age: 29
    }
  ]
}
