import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.page.html',
  styleUrls: ['./my-courses.page.scss'],
})
export class MyCoursesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(expense:any){
    console.log("Value is" + expense.value)
  }

}
