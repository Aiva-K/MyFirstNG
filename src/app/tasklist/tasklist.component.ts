import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  // You have to include commonmodule in angular since it normally doesn't have a forloop capability
  imports: [CommonModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.scss'
})
export class TasklistComponent {

  tasks:any[] = [
    {
      id: 1,
      taskTitle: 'Water The Lawn',
      isComplete: false
    },
    {
      id:2,
      taskTitle: 'Vacuum Rooms',
      isComplete: false
    },
    {
      id:3,
      taskTitle: 'Clean the Mirrors',
      isComplete: false
    }
  ];


  addNewTask(pNewTask:string){
    let newTask = {
      id: this.tasks.length+1,
      taskTitle: pNewTask,
      isComplete: false
    }
    // console.log(newTask);
    this.tasks.push(newTask);

  }

  deleteTask(pIndex:number){
    console.log(pIndex, this.tasks);
    this.tasks.splice(pIndex, 1);
    console.log(pIndex, this.tasks);
  
  }


  changeCompleteStatus(event: Event, index:number){
    // alert((event.target as HTMLInputElement).checked);
    let checkboxStatus = (event.target as HTMLInputElement).checked
    console.log(index);
    if(checkboxStatus){
      this.tasks[index].isComplete = true;
    }
    else{
      this.tasks[index].isComplete = false;
    }

    console.log(this.tasks);
  }
}
