import { Component } from '@angular/core';
import { ContactinfoComponent } from "../contactinfo/contactinfo.component";
import { SocialmediaComponent } from "../socialmedia/socialmedia.component";

@Component({
  selector: 'app-contact',
  imports: [ContactinfoComponent, SocialmediaComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  title:string = "My Contact Page";
  user:string = "Bruce Wayne";
  email: string = "laura.palmer@gmail.com";
  type:string = "varchar";
  myEmail:string = "My Emails2";
  online:string="offline";
  // Since we defined emailStyle as a [class] then whatever we write in the string will apply that class
  emailStyle:string="disabled";
  fontColor:string="blue";
  emailPadding:string="20px";
  

  // You can control text, attributes, custom attributes and classes through typescript

  submit(){
    alert('Button clicked');
  }
}
