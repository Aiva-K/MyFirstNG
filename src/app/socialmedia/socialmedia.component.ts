import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'socialmedia',
  imports: [FormsModule],
  templateUrl: './socialmedia.component.html',
  styleUrl: './socialmedia.component.scss'
})
export class SocialmediaComponent {

  signUpNotif: string = "Your Email Here"

  signUp(){
    // alert(this.signUpNotif);
    console.log(this.signUpNotif);
  }
}
