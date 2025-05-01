import { Component } from '@angular/core';

@Component({
  selector: 'app-program',
  imports: [],
  templateUrl: './program.component.html',
  styleUrl: './program.component.scss'
})
export class ProgramComponent {

  a = 2;
  b = 3;
  c:any = '2';
  compare: boolean = (2>3);
  notEqual: boolean = (this.a!=this.b);
  equal = (this.a == this.c);
  strictEqual:boolean = (this.a === this.c);
  notStrictEqualTo: boolean = (this.a !== this.c);

  passport = true;
  license = false;

  visaOffice = (this.passport && this.license);
  votingCenter = (this.passport || this.license);

  show=false;


  equalto(){
    if(this.a === parseInt(this.c)){

    }
  }

}


