import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-tasklist',
  // You have to include commonmodule in angular since it normally doesn't have a forloop capability
  imports: [CommonModule, FormsModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.scss'
})
export class TasklistComponent {

  newTask: string = "Text from Component";

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

  showNewTask(){
    alert(this.newTask);
  }

  // Every function has to have an incoming result either as string or index, naming it with a certain letter like pIndex or pNewTask makes it easier to remember this attribute.
  addNewTask(){
    let newTask = {
      // tasks.length+1 is because the index counting starts from 0, but if we are working with IDs then they start with 1, so in order for the IDs to be in line with index counting then we do +1
      id: this.tasks.length+1,
      taskTitle: this.newTask,
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
