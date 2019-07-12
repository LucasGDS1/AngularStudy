import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-control',
  templateUrl: './student-control.component.html',
  styleUrls: ['./student-control.component.css']
})
export class StudentControlComponent implements OnInit {
  student_ra: String;
  student_nome: String;
  student_email: String;
  listStudent: Array<any>;

  constructor() { 
    this.listStudent = new Array<any>();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.listStudent.push({
      ra:this.student_ra,
      nome:this.student_nome,
      email:this.student_email
    });
    this.student_ra = "";
    this.student_nome = "";
    this.student_email = "";
  }
}
